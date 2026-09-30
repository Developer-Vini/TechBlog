const BASE_URL = "https://techblog-jj0p.onrender.com";

const loginForm = document.getElementById('login-form');

const registerForm = document.getElementById('register-form');

if (loginForm) {
    if (localStorage.getItem('token')) {
        mostrarPainelLogado();
    }

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Error logging in.");
                return;
            }
            localStorage.setItem('token', data.token);
            mostrarPainelLogado();
            alert("Successfully connected! You can now manage your blog.");

        } catch (error) {
            console.error("Error connecting to the server:", error);
            alert("Unable to connect to the backend server in the cloud.");
        }
    });
}

function mostrarPainelLogado() {
    const authSection = document.getElementById('auth-section');
    const loggedSection = document.getElementById('logged-section');

    if (authSection && loggedSection) {
        authSection.style.display = 'none';
        loggedSection.style.display = 'block';
    }
}

function logout() {
    localStorage.removeItem('token');
    window.location.reload();
}

const bentoContainer = document.getElementById('container_tech');

if (bentoContainer) {
    async function loadBlogPosts() {
        bentoContainer.innerHTML = "<p>Searching for text blocks in Neon PostgreSQL...</p>";

        try {
            const response = await fetch(`${BASE_URL}/cards`);

            if (!response.ok) throw new Error("Error retrieving profile data.");

            const data = await response.json();
            bentoContainer.innerHTML = "";

            if (!data.Cards || data.Cards.length === 0) {
                bentoContainer.innerHTML = "<p>No blocks have been published yet.</p>";
                return;
            }

            data.Cards.forEach((card, index) => {
                const cardElement = document.createElement('div');

                cardElement.className = index === 0 ? "card largo" : "card";

                cardElement.innerHTML = `
                    <h3>${card.title}</h3>
                    <p>${card.content}</p>
                `;
                bentoContainer.appendChild(cardElement);
            });
        } catch (error) {
            console.error("Falha ao ler posts:", error);
            bentoContainer.innerHTML = "<p>Error connecting to the API or loading posts from the database.</p>";
        }
    }
    const token = localStorage.getItem('token');
    const publishSection = document.getElementById('publish-section');

    if (token && publishSection) {
        publishSection.style.display = 'block';
    }

    const createPostForm = document.getElementById('create-post-form');
    if (createPostForm) {
        createPostForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const title = document.getElementById('post-title').value;
            const content = document.getElementById('post-content').value;

            try {
                const response = await fetch(`${BASE_URL}/cards`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ title, content })
                });

                if (!response.ok) {
                    alert("Session expired or invalid. Please log in again on the Home page.");
                    return;
                }
                createPostForm.reset();
                loadBlogPosts();
                alert("New block published");

            } catch (error) {
                console.error("Error while trying to save card:", error);
                alert("Internal error while sending the publication..");
            }
        });
    }

    loadBlogPosts();
}

if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const firstName = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        try {
            const response = await fetch(`${BASE_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Error while trying to register.");
                return;
            }

            alert("Account created successfully! Redirecting to login...");

            window.location.href = "index.html";

        } catch (error) {
            console.error("Error in registration request:", error);
            alert("We were unable to connect to the server to complete the registration.");
        }
    });
}
