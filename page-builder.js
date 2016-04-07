var repositoriesElement = document.querySelector('#repositories');

function createContent(tagName, className) {
  var tag = document.createElement(tagName);

  if (className !== undefined) {
    tag.classList.add(className);
  }
  return tag;
}

function createAnchor(text, href) {
  var tag = createContent('a');
  tag.textContent = text;
  tag.href = href;
  return tag;
}

function createParagraph(text, className) {
  var tag = document.createElement('p');
  tag.classList.add(className);
  tag.textContent = text;
  return tag;
}

function createRepoElement(repoName, repoHref, loginName, loginHref, description) {

  var div = createContent('div', 'repo');

  var h2 = createContent('h2', 'repo-name');
  div.appendChild(h2);

  var a = createAnchor(repoName, repoHref);
  h2.appendChild(a);

  var h3 = createContent('h3', 'login-name');
  div.appendChild(h3);

  var loginLink = createAnchor(loginName, loginHref);
  h3.appendChild(loginLink);

  var descriptionElement = createParagraph(description, 'description');
  div.appendChild(descriptionElement);

  return div;
}

function getRepos() {
  for (var repo of githubData.items) {
    //create dom stuff
    var repoElement = createRepoElement(repo.name, repo.html_url, repo.owner.login, repo.owner.html_url, repo.description);
    //add dom stuff to page
    repositoriesElement.appendChild(repoElement);
  }
}

getRepos();
