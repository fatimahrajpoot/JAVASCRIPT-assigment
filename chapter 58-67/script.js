  // i. Get element of id “main-content” and assign them in a variable.
  const mainContent = document.getElementById('main-content');

  // ii. Display all child elements of “main-content” element.
  console.log(mainContent.children);
  
  // iii. Get all elements of class “render” and show their innerHTML in browser.
  const renderElements = document.getElementsByClassName('render');
  for (let element of renderElements) {
      console.log(element.innerHTML);
  }
  
  // iv. Fill input value whose element id first-name using javascript.
  document.getElementById('first-name').value = 'Alex';
  
  // v. Repeat part iv for id ”last-name” and “email”.
  document.getElementById('last-name').value = 'Bank';
  document.getElementById('email').value = 'alexbank@example.com';
  
  // 2. i. What is node type of element having id “form-content”.
  const formContent = document.getElementById('form-content');
  console.log(formContent.nodeType); // 1 (Element node)
  
  // ii. Show node type of element having id “lastName” and its child node.
  const lastName = document.getElementById('lastName');
  console.log(lastName.nodeType); // 1 (Element node)
  console.log(lastName.firstChild.nodeType); // 3 (Text node)
  
  // iii. Update child node of element having id “lastName”.
  lastName.firstChild.nodeValue = 'Last Name: Updated Bank';
  
  // iv. Get First and last child of id “main-content”.
  console.log(mainContent.firstChild);
  console.log(mainContent.lastChild);
  
  // v. Get next and previous siblings of id “lastName”.
  console.log(lastName.nextElementSibling);
  console.log(lastName.previousElementSibling);
  
  // vi. Get parent node and node type of element having id “email”.
  const email = document.getElementById('email');
  console.log(email.parentNode);
  console.log(email.parentNode.nodeType); // 1 (Element node)
  