using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public TextMeshProUGUI timerText; // Gán từ Inspector
    public TextMeshProUGUI HighestText;
    public TextMeshProUGUI SccoreText;
    public TextMeshProUGUI NotificationText;
    public int Score = 0;
    public int Highest = 0;
    public int HighestCurrently = 0;
    private float playTime = 0f;

    void Update()
    {
        playTime += Time.deltaTime;
        int secondsPlayed = Mathf.FloorToInt(playTime);
        timerText.text = secondsPlayed.ToString();
        Debug.Log("Seconds Played: " + HighestCurrently);
        if (HighestCurrently >= Highest)
        {
            Highest = HighestCurrently;
            HighestText.text = Highest.ToString();
        }
        SccoreText.text = Score.ToString();
        if (HighestCurrently == 1)
        {
            NotificationText.text = "Perfect Dunk";
        }

    }
}
