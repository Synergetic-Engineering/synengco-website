---
layout: performance-calc
title: Coal Fired Power Station Unit
permalink: /:collection/:path/
description: System calculation of a Coal Fired Power Station Unit
inputs:
    - casname: turb.gen.c2out.energyFlow.use
      descr: Generator Load
      units: kW
    - casname: blr.ms.prop.temp.use
      descr: Main Steam Temperature
      units: degC
    - casname: blr.ms.prop.press.use
      descr: Main Steam Pressure
      units: degC
outputs:
    - casname: efficiency.net.use
      descr: Net Unit Efficiency
      units: "%"
    - casname: efficiency.gross.use
      descr: Gross Unit Efficiency
      units: "%"
children:
  - casname: airgas
    descr: Air & Gas Subsystem
  - casname: blr
    descr: Boiler Subsystem
  - casname: turb
    descr: Turbogenerator Subsystem
  - casname: cooling
    descr: Cooling Subsystem
---


<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on station instances:</p>
<table border="1" class="docutils">
<colgroup>
<col width="28%">
<col width="32%">
<col width="39%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Sent Out Heat Rate</td>
<td>ASME PTC 4, 6 &amp;</td>
<td>.efficiency.net.heatrate</td>
</tr>
<tr class="row-odd"><td>Generated Heat Rate</td>
<td>&nbsp;</td>
<td>.efficiency.gross.heatrate</td>
</tr>
<tr class="row-even"><td>Sent Out Efficiency</td>
<td>&nbsp;</td>
<td>.efficiency.net.use</td>
</tr>
<tr class="row-odd"><td>.</td>
<td>&nbsp;</td>
<td>.efficiency.net.percentage</td>
</tr>
<tr class="row-even"><td>Generated Efficiency</td>
<td>&nbsp;</td>
<td>.efficiency.gross.use</td>
</tr>
<tr class="row-odd"><td>.</td>
<td>&nbsp;</td>
<td>.efficiency.gross.percentage</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Heat Rate</strong></p>
<p>Heat rate is a method of expressing efficiency.  Heat rate defines the ratio of
heat input in the form of coal at the Boiler, to the electrical power output of
the generator.  It is usually expressed in kJ/kWhr and varies with load.</p>
<p>Heat rate can be expressed in two ways:  Units Generated (UG:  uses generateor terminal
voltage), and Units Sent Out (USO:  includes auxiliary energy).  To convert Heat
Rate to efficiency you use the formula:</p>
<div class="math">
<p><span class="math">HR = \frac{3600}{\eta}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">\eta</span> = efficiency (%)</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">efficiency.gross.heatrate = \frac{3600}{efficiency.gross.use}</span></p>
</div><p><strong>Generator Efficiency</strong></p>
<p>To determine the overall unit efficiency you require the total energy extracted as
electricity divided by the heat added to the boiler.  The gross efficiency as
calculated below:</p>
<div class="math">
<p><span class="math">\eta _{GEN} = \frac{Q_{GEN}}{Q_{rF}}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">Q_{GEN}</span> = Generated Output; and</li>
<li><span class="math">Q_{rF}</span> = Fuel Input.</li>
</ul>
<p>But as stated in PTC 46 Section 3.1.2.1, another method for determining boiler efficiency
is via the “energy balance” method. This is considered to be more accurate as it doesn’t
rely on mass flow measurement. changing the equation to:</p>
<div class="math">
<p><span class="math">\eta _{GEN} = Q_{GEN} \times \frac{\eta blr}{Qblrout}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">\eta blr</span> = blr efficiency by losses (%); and</li>
<li><span class="math">Qblrout</span> = net boiler heat output (kW).</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">efficiency.gross.use = turb.gen.c2out.energyFlow.use \times \frac{blr.efficiency\_losses.use}{blr.netheatoutput.use}</span></p>
</div><p><strong>Sent Out Power</strong></p>
<p>The sent out power as caculated is:</p>
<div class="math">
<p><span class="math">Q_{SO} = Q_{GEN} - Q_{AUX}</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">turb.gentrf.c2out.energyFlow.use = turb.gen.c2out.energyFlow.use - turb.auxPower.use</span></p>
</div><p><strong>Turbine Auxillary Power</strong></p>
<p>The turbo auxiliary power as calculated is:</p>
<div class="math">
<p><span class="math">Q_{AUX} = Q_{UNITAUX} + Q_{TRANLOSS}</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">turb.auxPower.use = unit \ auxiliaries + transformer \ losses</span></p>
</div><p>Transformer losses are considered to remain constant and are therfore not calculated.</p>
</div>
