---
layout: home
title: Synengco - Giving you time
description: Using real-time analytics and decision support
landing-title: Helping you do more with less time
#landing-subtitle: By turning knowledge & data into quantified & prioritised actions
landing-subtitle: Using real-time analytics and decision support
call-to-action: Find out more
image: assets/images/logo_stacked_colour.png
author: Synengco Pty. Ltd.
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
