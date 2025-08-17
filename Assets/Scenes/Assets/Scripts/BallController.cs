using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallController : MonoBehaviour
{
    public float fixedZ = -24f;
    public float throwForce = 500f;
    public float upForceMultiplier = 0.5f;
    public LayerMask ballTapLayer;

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
                    GameObject ball = hit.collider.gameObject;
                    BallRotation ballRotation = ball.GetComponent<BallRotation>();

                    if (ballRotation != null && ballRotation.floors)
                    {
                        selectedBall = ball;
                        selectedRb = selectedBall.GetComponent<Rigidbody>();
                        selectedRb.isKinematic = true;

                        ballRotation.isHitByRay = true;
                        ballRotation.floors = false; // Đánh dấu là đang bay
                        ballRotation.baskets = false;
                    }
                }
            }
        }

        // --- Kéo bóng ---
        if (selectedBall != null && Input.GetMouseButton(0))
        {
            if (Input.mousePosition.x < 0 || Input.mousePosition.x > Screen.width ||
                Input.mousePosition.y < 0 || Input.mousePosition.y > Screen.height)
            {
                ReleaseBall();
                return;
            }

            Vector3 mousePos = Input.mousePosition;
            mousePos.z = Mathf.Abs(fixedZ - Camera.main.transform.position.z);

            Vector3 worldPos = Camera.main.ScreenToWorldPoint(mousePos);
            selectedBall.transform.position = new Vector3(worldPos.x, worldPos.y, fixedZ);

            lastMouseWorldPos = worldPos;
        }

        // --- Thả bóng ---
        if (selectedBall != null && Input.GetMouseButtonUp(0))
        {
            ReleaseBall();
        }
    }

    private void ReleaseBall()
    {
        selectedRb.isKinematic = false;

        Vector3 throwDir = (lastMouseWorldPos - selectedBall.transform.position);
        throwDir.z = 1f;
        throwDir.y += upForceMultiplier;

        selectedRb.AddForce(throwDir.normalized * throwForce);

        //Gán lại isHitByRay = false cho đúng bóng
        BallRotation ballRotation = selectedBall.GetComponent<BallRotation>();
        if (ballRotation != null)
        {
            ballRotation.isHitByRay = false;
        }
     

        selectedBall = null;
        selectedRb = null;
    }
}
