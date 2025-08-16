using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class theball : MonoBehaviour
{
    public float rotationSpeed = 100f; // tốc độ xoay
    public KeyCode rotateKey = KeyCode.Mouse0; // phím "kếu" — mặc định là chuột trái
    private float previousMouseX;
    
    void Update()
    {
        // Chỉ xử lý khi người chơi đang nhấn giữ phím "kếu"
        if (Input.GetKey(rotateKey))
        {
            float currentMouseX = Input.mousePosition.x;
            float deltaX = currentMouseX - previousMouseX;
            float rotationY = deltaX * rotationSpeed * Time.deltaTime;

            // Làm tròn để tránh sai số dấu phẩy
            int roundedY = Mathf.RoundToInt(rotationY);
            // Xoay theo hướng chuột
            transform.Rotate(0, roundedY, 0);
            previousMouseX = currentMouseX;
        }
        else
        {
            // Cập nhật vị trí chuột khi không nhấn để tránh giật xoay khi bắt đầu nhấn
            previousMouseX = Input.mousePosition.x;
        }

    }
}
