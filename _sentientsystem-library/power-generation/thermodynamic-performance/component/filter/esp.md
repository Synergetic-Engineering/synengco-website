---
layout: performance-calc
title: Electro-Static Precipitator

permalink: /:collection/:path/
description: Electro-static precipitator component
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are applied to all ESP instances.</p>
<table border="1" class="docutils">
<colgroup>
<col width="35%">
<col width="38%">
<col width="27%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Power Consumption</td>
<td>&nbsp;</td>
<td>.energyTotal.use</td>
</tr>
<tr class="row-odd"><td>Pressure Drop</td>
<td>&nbsp;</td>
<td>.c1.dP.use</td>
</tr>
<tr class="row-even"><td>Collection Efficiency</td>
<td>&nbsp;</td>
<td>.efficiency.use</td>
</tr>
</tbody>
</table>
<p>The collection plate efficiency (Handbook of Complex Environmental Remediation
Problems, Chapter 3.6.4) is defined as:</p>
<div class="math">
<p><span class="math">$$\eta = 1 - e^{\frac{-w_{p}A}{Q_{g}}}$$</span></p>
</div><p>Where:
* <span class="math">$\eta$</span> = Collection efficiency for a flat-plate, turbulent-flow ESP
* <span class="math">$w_{p}$</span> = Particle migration velocity
* <span class="math">$A$</span> = <span class="math">$2_{n}LH$</span> = total collection area for the particles</p>
<blockquote>
<div><ul class="simple">
<li><span class="math">$_{n}$</span> = Number of channels</li>
<li><span class="math">$L$</span> = Length of the collection electrode</li>
<li><span class="math">$H$</span> = Height of the collection electrode</li>
</ul>
</div></blockquote>
<ul class="simple">
<li><span class="math">$Q_{g}$</span> = Volumetric flow rate of the gas</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$ep.efficiency.use = 1 - e^{a}$$</span></p>
</div><p>Where:</p>
<div class="math">
<p><span class="math">$$a = \frac{- \ ep.efficiency.use \times ep.area.use}{ep.c1in.volFlow.use}$$</span></p>
</div><p>The pressure drop over the precipitator is measured by:</p>
<div class="math">
<p><span class="math">$$ep.c1.dP.use = ep.c1in.prop.pres.use - ep.c1out.prop.press.use$$</span></p>
</div></div>
