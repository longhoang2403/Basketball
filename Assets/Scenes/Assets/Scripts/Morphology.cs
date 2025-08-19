using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Morphology : MonoBehaviour
{
    public GameObject highlightImage;
    public float scaleSpeed = 1f;
    public float minScale = 0.9f;
    public float maxScale = 1.1f;

    private bool isSelected = false;
    private bool scalingDown = true;
    private float currentScale = 1f;

    void Update()
    {
        if (isSelected && highlightImage != null)
        {
            float delta = scaleSpeed * Time.deltaTime;

            if (scalingDown)
            {
                currentScale -= delta;
                if (currentScale <= minScale)
                    scalingDown = false;
            }
            else
            {
                currentScale += delta;
                if (currentScale >= maxScale)
                    scalingDown = true;
            }

            highlightImage.transform.localScale = new Vector3(currentScale, currentScale, currentScale);
        }
    }

    public void SetSelected(bool selected)
    {
        isSelected = selected;
        if (highlightImage != null)
        {
            highlightImage.SetActive(selected);
            if (selected)
            {
                currentScale = maxScale;
                scalingDown = true;
            }
        }
    }

    // Khi chạm vào vùng "tap check"
    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Check"))
        {
            SetSelected(true);
        }
    }

    // Khi rời khỏi vùng "tap check"
    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("Check"))
        {
            SetSelected(false);
        }
    }
}