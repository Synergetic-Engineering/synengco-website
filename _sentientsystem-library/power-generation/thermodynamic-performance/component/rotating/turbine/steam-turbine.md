---
layout: performance-calc
title: Steam Turbine
permalink: /:collection/:path/
description: Steam turbine description
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
<p>The following performance calculations are applied to all turbine instances.</p>
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
<tr class="row-even"><td>Efficiency</td>
<td>ASME PTC 6, S 5.10</td>
<td>.stageEfficiency.use</td>
</tr>
<tr class="row-odd"><td>Pressure Drop</td>
<td>&nbsp;</td>
<td>.c1.dP.use</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Turbine Stage Efficiency</strong></p>
<div class="math">
<p><span class="math">$$\eta _{turb} = \frac{H_{i} - H_{o}}{H_{i} - H_{o} \ _{isentropic}}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$\eta _{turb}$</span> = Turbine stage efficiency</li>
<li><span class="math">$H_{i}$</span> = Inlet enthalpy</li>
<li><span class="math">$H_{o}$</span> = Outlet enthalpy</li>
<li><span class="math">$H_{o} \ _{isentropic}$</span> = Calculated enthalpy for isentropic expansion</li>
</ul>
<p>In CAS terms (where ”.” represents the turbine stage in question):</p>
<p>Turbine stage efficiency (%) =</p>
<div class="math">
<p><span class="math">$$\frac{.c1in.prop.energy.use - .c1out.prop.energy.use}{\left ( .c1in.prop.energy.use - ANYPS2H\left ( .c1out.prop.press.use,.c1in.prop.entropy.use \right ) \right )}$$</span></p>
</div><p><strong>Wet Turbine Stage Efficiency</strong></p>
<div class="math">
<p><span class="math">$$\eta _{turbwet} = \eta _{turb} \times (1 - B_{f} \times \left ( \frac{w_{i} + w_{o}}{2} \right ))$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$\eta _{turbwet}$</span> = Wet stage efficiency</li>
<li><span class="math">$B_{f}$</span> = Bauman factor</li>
<li><span class="math">$w_{i}$</span> = Inlet wetness</li>
<li><span class="math">$w_{o}$</span> = Outlet wetness</li>
</ul>
<p>In CAS terms (where “stage” is the turbine stage in question):</p>
<div class="math">
<p><span class="math">$$stage.wetStageEfficiency.use = stage.stageEfficiency.use \times (1 - stage.baumanFactor.use \times \left ( \frac{stage.c1in.prop.quality.use + stage.c1out.prop.quality.use}{2} \right ))$$</span></p>
</div><p>Wet Stage Efficiency Calculation provided by the book “Wet-steam turbines for nuclear power plants” by Alexander Leyzerovich. Equation 2.1.
Note that the bauman factor is usually 1 as mentioned in the reference.</p>
<p><strong>Turbine Steam Pressure Drop</strong></p>
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
<p><span class="math">$$turb.c1.cP.use = turb.c1in.prop.press.use - turb.c1out.prop.press.use$$</span></p>
</div></div>
