// Sprawdzenie, czy plik cookie został zaakceptowany
if (localStorage.getItem("cookieAccepted")) {
  document.getElementById("cookie-info").style.display = "none";
} else {
  document.getElementById("cookie-info").style.display = "block"; // Dodanie wyświetlania informacji o plikach cookie, jeśli nie zostały zaakceptowane
}

// Obsługa kliknięcia przycisku akceptacji plików cookie
document.getElementById("cookie-accept-btn").addEventListener("click", function() {
  localStorage.setItem("cookieAccepted", true); // Zapisanie informacji o zaakceptowaniu plików cookie do localStorage
  document.getElementById("cookie-info").style.display = "none"; // Ukrycie informacji o plikach cookie
});
