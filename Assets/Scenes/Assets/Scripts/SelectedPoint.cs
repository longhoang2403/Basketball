using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectedPoint : MonoBehaviour
{
    public GameObject[] targetObjects; // Các Obj1 → Obj5
    public Material[] ballMaterials;   // Material tương ứng với Ball1 → Ball8
    public string[] ballTags;          // Tag của Ball1 → Ball8 (ví dụ: "Ball1", "Ball2", ...)

    private bool isConfirmed = true;
    public GameObject panel;
    public GameObject gamePlay;

    // Gọi từ nút UI
    public void ConfirmSelection()
    {
      
        panel.SetActive(false);
        gamePlay.SetActive(true);
    }
    public void OpenConfirmSelection()
    {
        gamePlay.SetActive(false);
        panel.SetActive(true);
    }
    private void OnTriggerEnter(Collider other)
    {
        if (!isConfirmed) return;

        for (int i = 0; i < ballTags.Length; i++)
        {
            if (other.CompareTag(ballTags[i]))
            {
                ApplyMaterial(ballMaterials[i]);
                break;
            }
        }
    }

    void ApplyMaterial(Material mat)
    {
        foreach (GameObject obj in targetObjects)
        {
            MeshRenderer renderer = obj.GetComponent<MeshRenderer>();
            if (renderer != null)
            {
                renderer.material = mat;
            }
        }
    }
}
