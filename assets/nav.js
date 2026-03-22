document.addEventListener("DOMContentLoaded", function () {

const nav = `
<nav class="navbar">
<ul>
<li><a href="#about">About</a></li>
<li><a href="#news">News</a></li>
<li><a href="#research">Research</a></li>
<li><a href="#education">Education</a></li>
<li><a href="#publications">Publications</a></li>
<li><a href="#awards">Awards</a></li>
<li><a href="#teaching">Teaching</a></li>
</ul>
</nav>
`;

document.body.insertAdjacentHTML("afterbegin", nav);

});