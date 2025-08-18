using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class theball : MonoBehaviour
{
    public float rotationAmount = 45f; // góc xoay mỗi lần nhấn
    public float rotationSpeed = 180f; // tốc độ xoay (độ/giây)

    private Quaternion targetRotation;

    void Start()
    {
        // Khởi tạo góc xoay ban đầu
        targetRotation = transform.rotation;
    }

    void Update()
    {
        // Xoay từ từ đến góc mục tiêu
        transform.rotation = Quaternion.RotateTowards(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
    }

    public void RotateLeft()
    {
        targetRotation *= Quaternion.Euler(0, -rotationAmount, 0);
    }

    public void RotateRight()
    {
        targetRotation *= Quaternion.Euler(0, rotationAmount, 0);
    }
}
