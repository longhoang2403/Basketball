using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectedPoint : MonoBehaviour
{
    void OnTriggerStay(Collider other)
    {
        if (other.CompareTag("Ball"))
        {
            Morphology ball = other.GetComponent<Morphology>();
            if (ball != null)
            {
                ball.SetSelected(true);
                // x? lý ch?n v?t li?u nh? tr??c
            }
        }
    }

    void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("Ball"))
        {
            Morphology ball = other.GetComponent<Morphology>();
            if (ball != null)
            {
                ball.SetSelected(false);
            }
        }
    }
}
