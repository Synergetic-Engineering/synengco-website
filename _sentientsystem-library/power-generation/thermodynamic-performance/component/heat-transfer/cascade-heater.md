---
layout: performance-calc
title: Cascade Heater
permalink: /:collection/:path/
description: Description of a cascade heater
inputs:
  - casname: c1in.prop.temp.use
    descr: Inlet Temperature
    units: degC
outputs:
  - casname: condenser.heatTransferCoefficient.use
    descr: Heat Transfer Coefficient
    units: kW/K
children:
  - casname: desuperheater
    descr: Desuperheater
  - casname: condenser
    descr: Condenser
  - casname: drainCooler
    descr: Drain Cooler
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The Cascade Heater component comprises of a combination of 3 “Heater” type components.
Thereby the performance calcs associated with Cascade Heaters are dsitrubuted
amongst both <cite>performance_cascade_heater</cite> and <cite>performance_heater</cite> calculations.</p>
<p>The following performance calculations are available on cascade heater instances:</p>
<table border="1" class="docutils">
<colgroup>
<col width="37%">
<col width="24%">
<col width="39%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>TTD</td>
<td>ASME PTC 12.1</td>
<td>.ttd.use</td>
</tr>
<tr class="row-odd"><td>DCA</td>
<td>ASME PTC 12.1</td>
<td>.dca.use</td>
</tr>
<tr class="row-even"><td>UTF</td>
<td>&nbsp;</td>
<td>.util.use</td>
</tr>
<tr class="row-odd"><td>Temp Rise</td>
<td>&nbsp;</td>
<td>.c1.dT.use</td>
</tr>
<tr class="row-even"><td>Desuperheater - Heat Transfer</td>
<td>&nbsp;</td>
<td>.desuperheater.c1.dQ.use</td>
</tr>
<tr class="row-odd"><td>Desuperheater - Thermal Conductance</td>
<td>&nbsp;</td>
<td>.desuperheater.thermalConductance.use</td>
</tr>
<tr class="row-even"><td>Condenser - Heat Transfer</td>
<td>&nbsp;</td>
<td>.condenser.c1.dQ.use</td>
</tr>
<tr class="row-odd"><td>Condenser - Thermal Conductance</td>
<td>&nbsp;</td>
<td>.condenser.thermalConductance.use</td>
</tr>
<tr class="row-even"><td>Drain Cooler - Heat Transfer</td>
<td>&nbsp;</td>
<td>.drainCooler.c1.dQ.use</td>
</tr>
<tr class="row-odd"><td>Drain Cooler - Thermal Conductance</td>
<td>&nbsp;</td>
<td>.drainCooler.thermalConductance.use</td>
</tr>
</tbody>
</table>
<ul class="simple">
<li>TTD - Terminal Termperature Difference</li>
<li>LMTD - Log Mean Temperature Difference</li>
<li>DCA - Drain Cooler Approach Temperature</li>
<li>UTF - Utilisation Factor</li>
</ul>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Temperature Rise</strong></p>
<p>The temperature rise is defined as:</p>
<div class="math">
<p><span class="math">T_{r} = T_{fwout} - T_{fwin}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">T_{r}</span> = Temperature rise <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{fwout}</span> = Feedwater outlet temperature <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{fwin}</span> = Feedwater inlet temperature <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">.c1.dT.use = .c1out.prop.temp.use - .c1in.prop.temp.use</span></p>
</div><p><strong>Heat Transfer</strong></p>
<p>The heat transfer is defined as:</p>
<div class="math">
<p><span class="math">Q_{htr} = Q_{fwout } - Q_{fwin}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">Q_{htr}</span> = Heat transfer (kW)</li>
<li><span class="math">Q_{fwout }</span> = Feedwater outlet heatflow (kW)</li>
<li><span class="math">Q_{fwin}</span> = Feedwater inlet heat flow (kW)</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">c1.dQ.use - c1out.energyFlow.use - c1in.energyFlow.use</span></p>
</div><p><strong>Log Mean Temperature Difference</strong></p>
<p>The log mean temperature describes the mean temperature difference between
cooling water and condensing steam (HEI Standard for Closed Feedwater
Heaters section 1.7).</p>
<div class="math">
<p><span class="math">LMTD = \frac{T_{fwout} - T_{fwin}}{In\left ( \frac{T_{satsteamin} - T_{fwin}}{T_{satsteamin} - T_{fwout}} \right )}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">T_{satsteamin}</span> = saturation temperature heater shell pressure <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">.LMTD.use = \frac{.c1.dT.use}{In\left ( \frac {.c2in.prop.satTemp.use - .c1in.prop.temp.use}{.c2in.prop.satTemp.use - .c1out.prop.temp.use} \right )}</span></p>
</div><p><strong>Thermal Conductance</strong></p>
<div class="math">
<p><span class="math">TC = \frac{Q}{LMTD}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">TC</span> = Thermal conductance of heater (kW/<span class="math">^{o}C</span>)</li>
<li><span class="math">Q</span> = Heat transferred from feedwater (kW)</li>
<li><span class="math">LMTD</span> = Log mean temperature difference of heater <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">.thermalConductance.use = \frac{.c1.dQ.use}{.lmtd.use}</span></p>
</div><p><strong>Terminal Temperature Difference</strong></p>
<div class="math">
<p><span class="math">TTD = T_{extsteam} - T_{fwout}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">TTD</span> = Heat terminal temperature difference <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{extsteam}</span> = saturation temperature of extraction steam <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">.ttd.use = .c2in.prop.satTemp.use - .c1out.prop.temp.use</span></p>
</div><p><strong>Drain Cooler Approach</strong></p>
<div class="math">
<p><span class="math">DCA = T_{drainate} - T_{fwin}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">T_{drainate}</span> = Heater drainate temperature <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">.dca.use = .c2out.prop.temp.use - .c1in.prop.temp.use</span></p>
</div><p><strong>Heater Utility Factor</strong></p>
<div class="math">
<p><span class="math">UTILITY = \frac{T_{rdiff}}{T_{rdesign}}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">T_{rdiff}</span> = Feedwater temperature rise <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{rdesign}</span> = Feedwater temperature rise at design conditions <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">.utilityFactor.use = \frac{.c1.dT.use}{.c1.dT.design}</span></p>
</div></div>
