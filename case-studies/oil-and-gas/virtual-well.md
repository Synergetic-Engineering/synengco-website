---
layout: page
title: Virtual Well Model
permalink: /case-studies/oil-and-gas/virtual-well/
---

<div class="box">
	<strong>Empowered by <a href="http://www.sentientsystem.com" target="_blank">SentientSystem's</a> Asset Management Collaborative Platform</strong>
	<ul>
		<li>Add a new well or collaborate on an existing well</li>
		<li>Enter information and knowledge about the well</li>
		<li>Share with colleagues</li>
		<li>Watch the information update in real-time as colleagues contribute</li>
		<li><a href="#contact">Contact us</a> if you'd like to hook this up to a real-time data source</li>
	</ul>
</div>

<form method="post" action="#">
	<div class="row uniform">
		<div class="12u$">
			<label for="well-name">Add or Load a Well</label>
			<select name="well-name" class="select-wrapper select2-well-info"></select>
		</div>
	</div>
</form>

<div id="well-results" class="hidden">
	<hr/>
	<h3>Well information</h3>
	<div id="well-process">
		<strong>Latest operation</strong>
		<table id="latest-operation" class="display" width="100%"></table>
	</div>
	<div id="well-trend">
		<strong>Recent history</strong>
		<div class="ct-chart ct-double-octave"></div>
	</div>
	<div id="well-comment-history" class="table-wrapper">
		<strong>Comments</strong>
		<table id="comments" class="display" width="100%"></table>
	</div>
</div>

<div id="well-update" class="hidden">
	<hr/>
	<h3>Add or update information</h3>
	<form id="well-update-form" method="post" action="#">
		<div class="row uniform">
			<div class="6u 12u$(xsmall)">
				<label for="well-set-depth">Set Depth (m)</label>
				<input type="text" name="well-set-depth" id="well-set-depth" value="" placeholder="Set depth of PC Pump in metres" />
			</div>
			<!-- Break -->
			<div class="6u$ 12u$(xsmall)">
				<label for="well-capacity">Bottom Hole Pressure (kPa)</label>
				<input type="email" name="well-capacity" id="well-capacity" value="" placeholder="Pressure at PC pump entry in kPa" />
			</div>
			<!-- Break -->
			<div class="6u 12u$(xsmall)">
				<label for="well-username">Name</label>
				<input type="text" name="well-username" id="well-username" value="" placeholder="Enter your name" />
			</div>
			<div class="6u 12u$(xsmall)">
				<label for="well-comment">Comment</label>
				<textarea name="well-comment" id="well-comment" placeholder="Enter a comment about this well" rows="1"></textarea>
			</div>
			<!-- Break -->
			<div class="6u$ 12u$(small)">
				<input type="checkbox" id="well-use-current-time" name="well-use-current-time" checked>
				<label for="well-use-current-time">Use current time</label>
			</div>
			<!-- Break -->
			<div class="12u$">
				<ul class="actions">
					<li><input type="submit" value="Submit" class="special" /></li>
					<li><input type="reset" value="Reset" /></li>
				</ul>
			</div>
		</div>
	</form>
</div>





<div style="display: none;">

<!-- Lists -->
<h3>Lists</h3>
<div class="row">
	<div class="6u 12u$(small)">

		<h4>Unordered</h4>
		<ul>
			<li>Dolor etiam magna etiam.</li>
			<li>Sagittis lorem eleifend.</li>
			<li>Felis dolore viverra.</li>
		</ul>

	</div>
	<div class="6u$ 12u$(small)">

		<h4>Ordered</h4>
		<ol>
			<li>Dolor etiam magna etiam.</li>
			<li>Etiam vel lorem sed viverra.</li>
			<li>Felis dolore viverra.</li>
			<li>Dolor etiam magna etiam.</li>
			<li>Etiam vel lorem sed viverra.</li>
			<li>Felis dolore viverra.</li>
		</ol>

	</div>
</div>

<h4>Definition</h4>
<dl>
	<dt>Item1</dt>
	<dd>
		<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
	</dd>
	<dt>Item2</dt>
	<dd>
		<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
	</dd>
	<dt>Item3</dt>
	<dd>
		<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
	</dd>
</dl>

<h4>Actions</h4>
<ul class="actions">
	<li><a href="#" class="button special">Default</a></li>
	<li><a href="#" class="button">Default</a></li>
</ul>
<ul class="actions small">
	<li><a href="#" class="button special small">Small</a></li>
	<li><a href="#" class="button small">Small</a></li>
</ul>
<div class="row">
	<div class="6u 12u$(small)">
		<ul class="actions vertical">
			<li><a href="#" class="button special">Default</a></li>
			<li><a href="#" class="button">Default</a></li>
		</ul>
	</div>
	<div class="6u$ 12u$(small)">
		<ul class="actions vertical small">
			<li><a href="#" class="button special small">Small</a></li>
			<li><a href="#" class="button small">Small</a></li>
		</ul>
	</div>
	<div class="6u 12u$(small)">
		<ul class="actions vertical">
			<li><a href="#" class="button special fit">Default</a></li>
			<li><a href="#" class="button fit">Default</a></li>
		</ul>
	</div>
	<div class="6u$ 12u$(small)">
		<ul class="actions vertical small">
			<li><a href="#" class="button special small fit">Small</a></li>
			<li><a href="#" class="button small fit">Small</a></li>
		</ul>
	</div>
</div>


<!-- Table -->
<h3>Table</h3>

<h4>Default</h4>
<div class="table-wrapper">
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Item1</td>
				<td>Ante turpis integer aliquet porttitor.</td>
				<td>29.99</td>
			</tr>
			<tr>
				<td>Item2</td>
				<td>Vis ac commodo adipiscing arcu aliquet.</td>
				<td>19.99</td>
			</tr>
			<tr>
				<td>Item3</td>
				<td> Morbi faucibus arcu accumsan lorem.</td>
				<td>29.99</td>
			</tr>
			<tr>
				<td>Item4</td>
				<td>Vitae integer tempus condimentum.</td>
				<td>19.99</td>
			</tr>
			<tr>
				<td>Item5</td>
				<td>Ante turpis integer aliquet porttitor.</td>
				<td>29.99</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td colspan="2"></td>
				<td>100.00</td>
			</tr>
		</tfoot>
	</table>
</div>


<!-- Buttons -->
<h3>Buttons</h3>
<ul class="actions">
	<li><a href="#" class="button special">Special</a></li>
	<li><a href="#" class="button">Default</a></li>
</ul>
<ul class="actions">
	<li><a href="#" class="button big">Big</a></li>
	<li><a href="#" class="button">Default</a></li>
	<li><a href="#" class="button small">Small</a></li>
</ul>
<ul class="actions">
	<li><a href="#" class="button special big">Big</a></li>
	<li><a href="#" class="button special">Default</a></li>
	<li><a href="#" class="button special small">Small</a></li>
</ul>
<ul class="actions fit">
	<li><a href="#" class="button special fit">Fit</a></li>
	<li><a href="#" class="button fit">Fit</a></li>
</ul>
<ul class="actions fit small">
	<li><a href="#" class="button special fit small">Fit + Small</a></li>
	<li><a href="#" class="button fit small">Fit + Small</a></li>
</ul>
<ul class="actions">
	<li><a href="#" class="button special icon fa-search">Icon</a></li>
	<li><a href="#" class="button icon fa-download">Icon</a></li>
</ul>
<ul class="actions">
	<li><span class="button special disabled">Special</span></li>
	<li><span class="button disabled">Default</span></li>
</ul>

<!-- Form -->
<h3>Form</h3>

<form method="post" action="#">
	<div class="row uniform">
		<div class="6u 12u$(xsmall)">
			<input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
		</div>
		<div class="6u$ 12u$(xsmall)">
			<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
		</div>
		<!-- Break -->
		<div class="12u$">
			<div class="select-wrapper">
				<select name="demo-category" id="demo-category">
					<option value="">- Category -</option>
					<option value="1">Manufacturing</option>
					<option value="1">Shipping</option>
					<option value="1">Administration</option>
					<option value="1">Human Resources</option>
				</select>
			</div>
		</div>
		<!-- Break -->
		<div class="4u 12u$(small)">
			<input type="radio" id="demo-priority-low" name="demo-priority" checked>
			<label for="demo-priority-low">Low</label>
		</div>
		<div class="4u 12u$(small)">
			<input type="radio" id="demo-priority-normal" name="demo-priority">
			<label for="demo-priority-normal">Normal</label>
		</div>
		<div class="4u$ 12u$(small)">
			<input type="radio" id="demo-priority-high" name="demo-priority">
			<label for="demo-priority-high">High</label>
		</div>
		<!-- Break -->
		<div class="6u 12u$(small)">
			<input type="checkbox" id="demo-copy" name="demo-copy">
			<label for="demo-copy">Email me a copy</label>
		</div>
		<div class="6u$ 12u$(small)">
			<input type="checkbox" id="demo-human" name="demo-human" checked>
			<label for="demo-human">I am a human</label>
		</div>
		<!-- Break -->
		<div class="12u$">
			<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
		</div>
		<!-- Break -->
		<div class="12u$">
			<ul class="actions">
				<li><input type="submit" value="Send Message" class="special" /></li>
				<li><input type="reset" value="Reset" /></li>
			</ul>
		</div>
	</div>
</form>


<!-- Box -->
<h3>Box</h3>
<div class="box">
	<p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.</p>
</div>

</div>