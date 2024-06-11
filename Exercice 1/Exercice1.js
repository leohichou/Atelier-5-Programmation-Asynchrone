
const userData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  avatar: 'avatar.png',
  gender: 'M',
};

async function retrieveUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 2000); 
  });
}

async function processData() {
  try {
    const user = await retrieveUserData();
    
   return user;
  } catch (error) {
    console.error('Une erreur est survenue lors du traitement des données :', error);
  }
}



async function displayUserProfile() {
  try {
    const user = await processData(); // Wait for processData() to complete
    
    // Access the userData element in the HTML
    const userDataContainer = document.getElementById('userData');
    
    // Construct HTML to display user data
    const userDataHTML = `
      <div class="profile-info">
        <label>Name:</label>
        <span>${user.name}</span>
      </div>
      <div class="profile-info">
        <label>Email:</label>
        <span>${user.email}</span>
      </div>
      <div class="profile-info">
        <label>Avatar:</label>
        <img src="${user.avatar}" alt="User Avatar" width="100">
      </div>
      <div class="profile-info">
        <label>Gender:</label>
        <span>${user.gender}</span>
      </div>
    `;
    
    userDataContainer.innerHTML = userDataHTML;
  } catch (error) {
    console.error('An error occurred while processing data:', error);
  }
}

displayUserProfile();



async function retrieveMultipleUsersData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'John Doe',
          email: 'johndoe@example.com',
          avatar: 'avatar.png',
          gender: 'M',
          login: 'johndoe',
          password: '123456',
          address: '123 Main St, City'
        },
        {
          name: 'Jane Smith',
          email: 'janesmith@example.com',
          avatar: 'avatar2.png',
          gender: 'F',
          login: 'janesmith',
          password: 'abcdef',
          address: '456 Oak St, Town'
        }
        // Ajoutez d'autres utilisateurs si nécessaire
      ]);
    }, 2000); // 2 secondes de délai
  });
}
async function displayUsersTable() {
  try {
    const users = await retrieveMultipleUsersData(); // Attendre que les données de plusieurs utilisateurs soient récupérées
    
    const tableBody = document.getElementById('usersTableBody');
    
    let tableRowsHTML = '';
    users.forEach(user => {
      tableRowsHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td><img src="${user.avatar}" alt="User Avatar" width="50"></td>
          <td>${user.gender}</td>
          <td>${user.login}</td>
          <td>${user.password}</td>
          <td>${user.address}</td>
        </tr>
      `;
    });
    
    // Insérer les lignes du tableau dans le corps de la table
    tableBody.innerHTML = tableRowsHTML;
  } catch (error) {
    console.error('Une erreur est survenue lors du traitement des données :', error);
  }
}

// Appeler la fonction pour afficher le tableau d'utilisateurs
displayUsersTable();

//---------

// Fonction pour simuler la récupération des données utilisateur
function retrieveUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        email: 'johndoe@example.com',
        avatar: 'avatar.png',
        gender: 'M'
      });
    }, 2000); // 2 secondes de délai
  });
}

// Fonction pour simuler la récupération des commandes de l'utilisateur
function retrieveUserOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, product: 'Product 1', quantity: 2 },
        { id: 2, product: 'Product 2', quantity: 1 }
      ]);
    }, 1500); // 1.5 secondes de délai
  });
}

async function simulateAsyncActionsSequence() {
  try {
    const userData = await retrieveUserData();
    console.log('User data retrieved:', userData);

    const userOrders = await retrieveUserOrders();
    console.log('User orders retrieved:', userOrders);

    // Display user orders as inner HTML
    const ordersContainer = document.getElementById('userOrders');
    let ordersHTML = '<ul>';
    userOrders.forEach(order => {
      ordersHTML += `<li>${order.quantity}x ${order.product}</li>`;
    });
    ordersHTML += '</ul>';
    ordersContainer.innerHTML = ordersHTML;
  } catch (error) {
    console.error('An error occurred during the asynchronous actions sequence:', error);
  }
}

simulateAsyncActionsSequence();
