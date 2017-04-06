---
layout: performance-calc
title: Fan
permalink: /:collection/:path/
description: Fan component
---


<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on fan instances.</p>
<table border="1" class="docutils">
<colgroup>
<col width="29%">
<col width="43%">
<col width="29%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Fan Efficiency</td>
<td>&nbsp;</td>
<td>.efficiency.use</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Efficiency</strong></p>
<p>The static fan efficiency is defined as:</p>
<div class="math">
<p><span class="math">\eta = 100 \times \frac{P \times M}{\rho \times Q_{elec}}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">\eta</span> = Fan efficiency (%)</li>
<li><span class="math">P</span> = Static Fan Pressure</li>
<li><span class="math">M</span> = Mass flow of air/gas</li>
<li><span class="math">\rho</span> = density of air/gas</li>
<li><span class="math">Q_{elec}</span> = Electrical power input</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">.efficiency.use = \frac {(.c1out.prop.pres.use - .c1in.prop.press.use) \times .c1out.massFlow.use}{.c1out.prop.density.use \times .c2in.energyFlow.use}</span></p>
</div><p><strong>Current Load</strong></p>
<div class="math">
<p><span class="math">I_{PM} = \frac{I_{actual}}{I_{max}} \times 100 \%</span></p>
</div><p>Where</p>
<ul class="simple">
<li><span class="math">I_{actual}</span> = Actual Fan Current (A)</li>
<li><span class="math">I_{max}</span> = Max Fan Current (A)</li>
</ul>
<p>In CAS Terms:</p>
<div class="math">
<p><span class="math">current\_pm.percentage = 100.0 * current\_pm.use / current\_pm.max</span></p>
</div></div>
