---
layout: performance-calc
title: Generator

permalink: /:collection/:path/
description: Generator component
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on generator instances.</p>
<table border="1" class="docutils">
<colgroup>
<col width="34%">
<col width="39%">
<col width="26%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Cooling water range</td>
<td>&nbsp;</td>
<td>.c3.dT.use</td>
</tr>
<tr class="row-odd"><td>Generator efficiency</td>
<td>&nbsp;</td>
<td>.efficiency.use</td>
</tr>
<tr class="row-even"><td>Power Factor</td>
<td>&nbsp;</td>
<td>.powerFactor.use</td>
</tr>
</tbody>
</table>
</div>

<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Cooling Water Range</strong></p>
<div class="math">
<p><span class="math">$$T_{r} = T_{cwout} - T_{cwin}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$T_{r}$</span> = Generator cooling water range temperature <span class="math">$(^{0}C)$</span></li>
<li><span class="math">$T_{cwout}$</span> = Generator cooling water outlet temperature <span class="math">$(^{0}C)$</span></li>
<li><span class="math">$T_{cwin}$</span> = Generator cooling water inlet temperature <span class="math">$(^{0}C)$</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$gen.c3.dT.use = gen.c3out.prop.temp.use - gen.c3in.prop.temp.use$$</span></p>
</div><p>The generator efficiency is determined by fitting a second order polynomial to
the generator efficiency design data, where:</p>
<p><strong>Generator Loss</strong></p>
<p>The generator Loss:</p>
<div class="math">
<p><span class="math">$$Loss = aQ_{GEN}^{2} + bQ_{GEN} + c$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$turb.gen.c4out.energyFlow.use = aturb.gen.c2out.energyFlow.use^{2} + bturb.gen.c2out.energyFlow.use + c$$</span></p>
</div><p><strong>Efficiency</strong></p>
<p>The Generator Efficiency is determined by:</p>
<div class="math">
<p><span class="math">$$\eta_{GEN} = \frac {Q_{GEN}} {Mechanical Energy In}$$</span></p>
</div><p>In CAS Terms:</p>
<div class="math">
<p><span class="math">$$.efficiency.use = \frac{.c2out.energyFlow.use}{.c2in.energyFlow.use}$$</span></p>
</div><p><strong>Power Factor</strong></p>
<p>The power factor is determined by if not available from the plant:</p>
<div class="math">
<p><span class="math">$$PF = \frac{Q_{GEN}}{Q_{GEN} + Q_{reactive}}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$PF$</span> = Power factor</li>
<li><span class="math">$Q_{reactive}$</span> = Generator reactive power</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$.powerFactor.use = \frac{.c2out.energyFlow.use}{.c2out.energyFlow.use + .reactivePower.use}$$</span></p>
</div></div>
