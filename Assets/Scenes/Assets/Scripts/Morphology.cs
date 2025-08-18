using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Morphology : MonoBehaviour
{
    public int materialIndex;
    public GameObject highlightImage; // Gán hình ảnh từ Inspector

    private bool isSelected = false;
    private float scaleSpeed = 2f;
    private float minScale = 2.2f;
    private float maxScale = 2.5f;
    private float currentScale = 2.5f;
    private bool scalingDown = true;

    void Update()
    {
        if (isSelected && highlightImage != null)
        {
            // Hiệu ứng scale nhịp thở
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
}
