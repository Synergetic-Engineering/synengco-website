---
layout: performance-calc
title: Coal Mill
permalink: /:collection/:path/
description: Coal mill component
---


<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on mill instances.</p>
<table border="1" class="docutils">
<colgroup>
<col width="32%">
<col width="35%">
<col width="33%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Delta Pressure</td>
<td>&nbsp;</td>
<td>.c1.dp.use</td>
</tr>
<tr class="row-odd"><td>Power/kg</td>
<td>&nbsp;</td>
<td>.loadFuelFlowRatio.use</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Power Flow Ratio</strong></p>
<p>The power flow ratio is defined as:</p>
<div class="math">
<p><span class="math">$$Ratio_{lf} = \frac{Q_{mill}}{M_{coal}}$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$mill.loadFuelRatio.use = \frac{mill.motor.c2in.energyFlow.use}{mill.c1out.massFlow.use}$$</span></p>
</div><p><strong>Delta Pressure</strong></p>
<p>Where Mill delta pressure is not directly measured. The mill delta pressure is defined as:</p>
<div class="math">
<p><span class="math">$$P_{millin} - P_{millout}$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$mill.c1.dP.use = mill.c1in.prop.press.use - mill.c1out.prop.press.use$$</span></p>
</div></div>
