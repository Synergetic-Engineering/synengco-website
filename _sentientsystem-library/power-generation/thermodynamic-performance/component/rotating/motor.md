---
layout: performance-calc
title: Motor
permalink: /:collection/:path/
description: Motor component
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on motor instances.</p>
<table border="1" class="docutils">
<colgroup>
<col width="27%">
<col width="39%">
<col width="34%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Motor Power</td>
<td>&nbsp;</td>
<td>.c1in.energyFlow.use</td>
</tr>
</tbody>
</table>
</div>

<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p>The electrical power input to a motor is given by:</p>
<div class="math">
<p><span class="math">$$Q = \sqrt{3} \times V \times \iota \times cos\phi$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$V$</span> = Motor voltage</li>
<li><span class="math">$\iota$</span> = Motor current</li>
<li><span class="math">$cos\phi$</span> = Power factor</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$.c1in.energyFlow.use = \frac{3**0.5 \times .volts.use \times .current.use \times .powerFactor.use}{1000}$</span></p>
</div></div>
