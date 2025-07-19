// === Audio Toggle for Folklore Page ===
document.addEventListener('DOMContentLoaded', function() {
  const langSelect = document.getElementById('langToggle');
  const audioToggle = document.getElementById('audioToggle');
  let isPlaying = false;

  function stopAllAudios() {
    document.querySelectorAll('audio').forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  }

  function getFirstVisibleAudio(lang) {
    // Find the first .story where the .en or .hi block is visible
    const stories = document.querySelectorAll('.story');
    for (const story of stories) {
      const langBlock = story.querySelector('.' + lang);
      if (langBlock && window.getComputedStyle(langBlock).display !== 'none') {
        const audio = langBlock.querySelector(`audio[data-lang='${lang}']`);
        if (audio) return audio;
      }
    }
    return null;
  }

  function toggleAudioPlayback(lang) {
    stopAllAudios();
    const audio = getFirstVisibleAudio(lang);
    if (audio) audio.play();
  }

  if (audioToggle && langSelect) {
    audioToggle.addEventListener('click', () => {
      const lang = langSelect.value;
      if (isPlaying) {
        stopAllAudios();
        audioToggle.textContent = '🔈 Audio Off';
      } else {
        toggleAudioPlayback(lang);
        audioToggle.textContent = '🔊 Audio On';
      }
      isPlaying = !isPlaying;
    });

    langSelect.addEventListener('change', () => {
      stopAllAudios();
      isPlaying = false;
      audioToggle.textContent = '🔈 Audio Off';
    });
  }
});

// Fade-in effect for .story elements
document.addEventListener("DOMContentLoaded", () => {
  const stories = document.querySelectorAll(".story");
  const revealOnScroll = () => {
    stories.forEach(story => {
      const top = story.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.9;
      if (top < trigger) {
        story.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger once on load
});