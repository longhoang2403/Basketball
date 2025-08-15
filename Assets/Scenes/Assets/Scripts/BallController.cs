using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallController : MonoBehaviour
{
    public float fixedZ = -24f;              // Z cố định khi kéo
    public float throwForce = 500f;          // Lực ném
    public float upForceMultiplier = 0.5f;   // Lực nâng bóng
    public LayerMask ballTapLayer;           // Layer bóng (gán trong Inspector)

    private GameObject selectedBall;
    private Rigidbody selectedRb;
    private Vector3 lastMouseWorldPos;

    void Update()
    {
        // --- Chọn bóng ---
        if (Input.GetMouseButtonDown(0) && selectedBall == null)
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;

            if (Physics.Raycast(ray, out hit, Mathf.Infinity, ballTapLayer))
            {
                if (hit.collider.CompareTag("ballTag"))
                {
                    selectedBall = hit.collider.gameObject;
                    selectedRb = selectedBall.GetComponent<Rigidbody>();
                    selectedRb.isKinematic = true;
                }
            }
        }

        // --- Kéo bóng ---
        if (selectedBall != null && Input.GetMouseButton(0))
        {
            // Kiểm tra nếu chuột ra ngoài màn hình → thả bóng
            if (Input.mousePosition.x < 0 || Input.mousePosition.x > Screen.width ||
                Input.mousePosition.y < 0 || Input.mousePosition.y > Screen.height)
            {
                ReleaseBall(); // Gọi hàm thả bóng
                return; // Dừng xử lý kéo
            }

            Vector3 mousePos = Input.mousePosition;
            mousePos.z = Mathf.Abs(fixedZ - Camera.main.transform.position.z);

            Vector3 worldPos = Camera.main.ScreenToWorldPoint(mousePos);
            selectedBall.transform.position = new Vector3(worldPos.x, worldPos.y, fixedZ);

            lastMouseWorldPos = worldPos;
        }

        // --- Thả và ném bóng ---
        if (selectedBall != null && Input.GetMouseButtonUp(0))
        {
            ReleaseBall();
        }
    }

    // --- Hàm thả bóng ---
    private void ReleaseBall()
    {
        selectedRb.isKinematic = false;

        Vector3 throwDir = (lastMouseWorldPos - selectedBall.transform.position);
        throwDir.z = 1f;
        throwDir.y += upForceMultiplier;

        selectedRb.AddForce(throwDir.normalized * throwForce);

        selectedBall = null;
        selectedRb = null;
    }
}
