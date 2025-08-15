using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallRotation : MonoBehaviour
{
    public float rotationMultiplier = 50f;   // Hệ số nhân tốc độ xoay
    public LayerMask rayHitLayers;           // Layer để kiểm tra tia

    private Vector3 lastPosition;
    private bool isHitByRay;

    void Start()
    {
        lastPosition = transform.position;
    }

    void Update()
    {
        // 1. Kiểm tra thay đổi position
        Vector3 currentPosition = transform.position;
        Vector3 movementDelta = currentPosition - lastPosition;
        float movementSpeed = movementDelta.magnitude / Time.deltaTime;

        // 2. Bắn tia từ Camera tới bóng để kiểm tra va chạm
        isHitByRay = false;
        Ray ray = Camera.main.ScreenPointToRay(Camera.main.WorldToScreenPoint(transform.position));
        RaycastHit hit;
        if (Physics.Raycast(ray, out hit, Mathf.Infinity, rayHitLayers))
        {
            if (hit.collider.gameObject == gameObject)
            {
                isHitByRay = true; // Có va chạm tia
            }
        }

        // 3. Nếu position thay đổi và KHÔNG bị tia chạm → xoay
        if (movementDelta != Vector3.zero && !isHitByRay)
        {
            float spinSpeed = movementSpeed * rotationMultiplier * Time.deltaTime;

            // Xoay đều 3 trục
            transform.Rotate(Vector3.right * spinSpeed, Space.World);
            transform.Rotate(Vector3.up * spinSpeed, Space.World);
            transform.Rotate(Vector3.forward * spinSpeed, Space.World);
        }

        // Lưu lại vị trí hiện tại để so sánh frame sau
        lastPosition = currentPosition;
    }
}
