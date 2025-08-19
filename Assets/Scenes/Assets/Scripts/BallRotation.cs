using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SocialPlatforms.Impl;

public class BallRotation : MonoBehaviour
{
    public float rotationMultiplier = 50f;   // Hệ số nhân tốc độ xoay
    public bool baskets = false;
    public bool floors = false;
    private Vector3 lastPosition;
    public bool isHitByRay;
 
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
      //  Debug.Log("Đang bị tia chạm: " + isHitByRay);
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
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("basket"))
        {
            baskets = true;
            GameController gameController = FindObjectOfType<GameController>();
            if (gameController != null)
            {
                gameController.Score = gameController.Score + 1;
                gameController.HighestCurrently = gameController.HighestCurrently + 1;
            }
        }
    }
  
    private void OnCollisionEnter(Collision collision)
    {

        if (collision.gameObject.CompareTag("floor"))
        {
           
            if (baskets != true &&  floors != true)
            {
                GameController gameController = FindObjectOfType<GameController>();
                if (gameController != null)
                {
                    gameController.HighestCurrently = 0;
                }
            }
            floors = true;
        }
    }
}
