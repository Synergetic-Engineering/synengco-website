---
layout: performance-calc
title: Throttle Valve
permalink: /:collection/:path/
description: Throttle valve description
inputs:
  - casname: c1in.prop.press.use
    descr: Inlet Pressure
    units: kPa
outputs:
  - casname: stageEfficiency.use
    descr: Stage Efficiency
    units: "%"
---


<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are applied to all throttle valve instances.</p>
<table border="1" class="docutils">
<colgroup>
<col width="26%">
<col width="39%">
<col width="34%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-odd"><td>Pressure Drop</td>
<td>&nbsp;</td>
<td>.c1.dP.use</td>
</tr>
<tr class="row-odd"><td>Temperature Drop</td>
<td>&nbsp;</td>
<td>.c1.dT.use</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>

<p><strong>Throttle Valve Pressure Drop</strong></p>
<div class="math">
<p><span class="math">$$\Delta P = P_{i} - P_{o}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$\Delta P$</span> = Delta pressure (kPa)</li>
<li><span class="math">$P_{i}$</span> = Inlet statge pressure (kPa)</li>
<li><span class="math">$P_{o}$</span> = Outlet stage pressure (kPa)</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$valve.c1.cP.use = valve.c1in.prop.press.use - valve.c1out.prop.press.use$$</span></p>
</div>

<p><strong>Throttle Valve Temperature Drop</strong></p>
<div class="math">
<p><span class="math">$$\Delta T = T_{i} - PT{o}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$\Delta T$</span> = Delta temperature ($(^{o}C)$)</li>
<li><span class="math">$T_{i}$</span> = Inlet temperature ($(^{o}C)$)</li>
<li><span class="math">$T_{o}$</span> = Outlet temperature ($(^{o}C)$)</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$valve.c1.cT.use = valve.c1in.prop.temp.use - valve.c1out.prop.temp.use$$</span></p>
</div>

</div>
