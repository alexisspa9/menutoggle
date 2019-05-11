# MenuToggle

install the package
```
npm install @alexisspa9/mobilemenu

```

then in your index.js yu can use the package like so:

```
const menuToggle = require('@alexisspa9/mobilemenu');


menuToggle();

```


and the html strucure should be

```
<button data-targetmenu="my-menu">button</button>

<nav data-menu="my-menu" data-toggled="false">
	<ul>
		<li>
			<a href="#">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<a href="#">4</a>
			<a href="#">5</a>
		</li>
	</ul>
</nav>
```

button element should have the data attribute data-targetmenu="yourmenu" and the menu should have the data attribute data-menu="yourmenu". data-targetmenu and data-menu should have the same value in order to open the specific menu. This is reusable with many menus.