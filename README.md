# MenuToggle

simply install the package and maintain a structure in your html files like so:

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