/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const entryPoint = document.querySelector('.cards');

const handArr = [];

axios.get("https://api.github.com/users/zbrown36")

.then(response => {
  console.log(response.data)
  entryPoint.appendChild(gitCard(response.data))
})
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed

  });


// Make a request for a user with a given ID
// axios.get("https://api.github.com/users/zbrown36")
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//     entryPoint.appendChild(gitCard(response.data))
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed

//   });

  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

  
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const gitCard = data => {

  const newCard = document.createElement('div')
  const gitPic = document.createElement('img')
  const info = document.createElement('div')
  const name = document.createElement('h3')
  const user = document.createElement('p')
  const location = document.createElement('p')
  const gitHubPro = document.createElement('p')
  const link = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  entryPoint.append(newCard)
  newCard.appendChild(gitPic)
  newCard.appendChild(info)
  info.appendChild(name)
  info.appendChild(user)
  info.appendChild(location)
  info.appendChild(gitHubPro)
  gitHubPro.appendChild(link)
  info.appendChild(followers)
  info.appendChild(following)
  info.appendChild(bio)

  newCard.classList.add('card')
  info.classList.add('card-info')
  name.classList.add('name')
  user.classList.add('username')

  gitPic.src = data.avatar_url
  name.textContent = data.name
  user.textContent = data.login
  location.textContent = `location: ${data.location}`
  gitHubPro.innerHTML = `Profile: <a href="${data.html_url}"> ${data.html_url}`
  link.href = "http://github.com/<username>"
  followers.textContent = `Followers: ${data.followers}`
  following.textContent = `Following: ${data.following}`


  return gitCard;

}

const followersArray = [
  'TheTrabin',
  'andrecolon',
  'mgroff1',
  'michealengland',
  'reannalp'

];

followersArray.forEach (element => {
  axios.get(`https://api.github.com/users/${element}`)
  then(response => {
    console.log(response.data)
    entryPoint.appendChild(gitCard(response.data))
  })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
  
    })});