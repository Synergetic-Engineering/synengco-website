---
layout: performance-calc
title: Pump
permalink: /:collection/:path/
description: Pump description
inputs:
  - casname: c1in.prop.press.use
    descr: Inlet Pressure
    units: kPa
outputs:
  - casname: efficiency.use
    descr: Stage Efficiency
    units: "%"
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on pump instances.</p>
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
<tr class="row-even"><td>Pump Efficiency</td>
<td>&nbsp;</td>
<td>.efficiency.use</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Efficiency</strong></p>
<p>Pump efficiency is defined as:</p>
<div class="math">
<p><span class="math">$$\eta _{pump} = \frac{Q_{fw}}{Q_{i}} = \frac{Q_{fw}}{Q_{fw} + Q_{loss}}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$Q_{fw}$</span> = Pump feedwater power</li>
<li><span class="math">$Q_{i}$</span> = Pump input drive power</li>
<li><span class="math">$Q_{loss}$</span> = Pump losses</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$pump.efficiency.use = \frac{pump.fluidPower.use}{pump.c2in.energyFlow.use} = \frac{pump.fluidPower.use}{pump.fluidPower.use + pump.c2in.energyFlow.use}$$</span></p>
</div><p><strong>Feedwater Power</strong></p>
<p>The pump feedwater power (Bernoulli) is given by:</p>
<div class="math">
<p><span class="math">$$Q_{fw} = \left ( \frac{P_{o}}{\rho} + z_{o}.g + \frac{v_{o}^{2}}{2} \right ) - \left ( \frac{P_{i}}{\rho} + z_{i}.g + \frac{v_{i}^{2}}{2} \right )$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$P_{i/o}$</span> = Inlet/outlet pressure</li>
<li><span class="math">$z_{i/o}$</span> = Inlet/outlet elevation (= 0 if no static pressure correction is required)</li>
<li><span class="math">$v_{i/o}$</span> = Inlet/outlet flow velocity</li>
<li><span class="math">$g$</span> =  <span class="math">$$9.81 m/s^{2}$$</span></li>
<li><span class="math">$\rho$</span> = Density</li>
<li>Note: pipe diameters will also be required to determine flow velocity.</li>
</ul>
<p>In CAS terms (where ”.” represents the pump):</p>
<div class="math">
<p><span class="math">$$pump.fluidPower.use = \left ( \frac{.c1out.prop.press.use}{.c1out.prop.density.use} + .outlet.elevation \times 9.81 + .outlet.velocity^{2} \right ) - \left ( \frac{.c1out.prop.density.use}{.c1in.prop.density.use} + .inlet.elevation*9.81 + \frac{.inlet.velocity^{2}}{2} \right )$$</span></p>
</div><p><strong>Losses</strong></p>
<p>If pump input drive power <span class="math">$$P_{i}$$</span> cannot be determined directly then
pump efficiency can be derived by determining the pump losses. Losses are
determined by calculating the enthalpy rise of the feedwater across the
pump.</p>
<div class="math">
<p><span class="math">$$H_{loss} = H_{fw_{o}} - H_{fw_{i}}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$H_{loss}$</span> = Pump loss due to feedwater enthalpy rise</li>
<li><span class="math">$H_{fw_{i/o}}$</span> = Inlet/outlet enthalpy of the feedwater</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$pump.c1.dQ.use = pump.c1out.prop.energy.use - pump.c1in.prop.energy.use$$</span></p>
</div><p><strong>Turbine Pump Drive Power</strong></p>
<p>If the pump is turbine driven the pump input drive power is given by:</p>
<div class="math">
<p><span class="math">$$Q_{i} = \frac{m_{t}(H_{i} - H_{o})} {m_{fw}}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$m_{t}$</span> = Turbine steam massflow</li>
<li><span class="math">$m_{fw}$</span> = Feedwater massflow</li>
<li><span class="math">$H_{i/o}$</span> = Turbine inlet/outlet enthalpy</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$pump.c2in.energyFlow.use = pump.c2in.massFlow.use \times (pump.c2out.prop.energy.use - pump.c1in.prop.energy.use)$$</span></p>
</div><p><strong>Motor Pump Driver Power</strong></p>
<p>If the pump is motor driven the pump input drive power is given by:</p>
<div class="math">
<p><span class="math">$$Q_{i} = \sqrt{3} \times V \times i \times cos\phi$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$V$</span> = Motor voltage</li>
<li><span class="math">$i$</span> = Motor current</li>
<li><span class="math">$cos\phi$</span> = Power factor</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$motor.c2in.energyFlow.use =  \sqrt{3} \times motor.volts.use \times motor.current.use \times motor.powerFactor.use$$</span></p>
</div></div>
