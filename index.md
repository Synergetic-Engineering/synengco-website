---
layout: home
title: Synengco
description: Delivering what's possible
landing-title: Helping you do more for less
landing-subtitle: Using real-time analytics and decision support
call-to-action: Find out more
image:
author:
nav-menu:
---

<!-- Banner -->
<section id="banner" class="major">
	<div class="inner">
		<header class="major">
			<h1>{{ page.landing-title }}</h1>
		</header>
		<div class="content">
			<p style="text-transform: uppercase;">{{ page.landing-subtitle }}</p>
			<ul class="actions">
				<li><a href="#one" class="button next scrolly">{{ page.call-to-action }}</a></li>
			</ul>
		</div>
	</div>
</section>

<!-- Main -->
<div id="main">

<!-- One -->
{% include tiles.html %}

<!-- Two -->
{% include post-previews.html %}

</div>
