using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using static UnityEngine.ParticleSystem;

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
    public ParticleSystem startchainParticle;
    private bool hasShownNotification = false;
    public GameObject targetObject;


    void Update()
    {
        playTime += Time.deltaTime;
        int secondsPlayed = Mathf.FloorToInt(playTime);
        timerText.text = secondsPlayed.ToString();
        if (HighestCurrently >= Highest)
        {
            Highest = HighestCurrently;
            HighestText.text = Highest.ToString();
        }
        SccoreText.text = Score.ToString();
        if (HighestCurrently == 1 && !hasShownNotification)
        {
            NotificationText.text = "Perfect Dunk";
            startchainParticle.Play();
            AudioSource otherAudio = targetObject.GetComponent<AudioSource>();
            otherAudio.Play();
            StartCoroutine(WaitAndDoSomething());
            hasShownNotification = true;
        }

        if (HighestCurrently != 1)
        {
            hasShownNotification = false;
        }
    }
    IEnumerator WaitAndDoSomething()
    {
        yield return new WaitForSeconds(1f); // Chờ 1 giây
        startchainParticle.Stop();
        NotificationText.text = "";
    }
}
