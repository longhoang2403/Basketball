using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public Text timerText; // Gán từ Inspector
    public Text HighestText;
    public Text SccoreText;
    public Text NotificationText;
    public int Score = 0;
    public int Highest = 0;
    public int HighestCurrently = 0;
    private float playTime = 0f;
    private bool hasShownNotification = false;
    public ParticleSystem startchainParticle;
    public ParticleSystem ChainLightsFull;
    public GameObject targetObject;
    private void Start()
    {
       // ChainLightsFull.Play();
    }
    void Update()
    {
        ChainLightsFull.Play();
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
        if (HighestCurrently == 1 && !hasShownNotification)
        {
            AudioSource otherAudio = targetObject.GetComponent<AudioSource>();
            otherAudio.Play();
            NotificationText.text = "Perfect Dunk";
            startchainParticle.Play();
            
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
