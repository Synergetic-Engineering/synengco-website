---
layout: performance-calc
title: Boiler
permalink: /:collection/:path/
description: The boiler subsystem is made up of a coal combustor and several boiler elements that pre-heat water, evaporate it into steam the super heat the steam.
inputs:
  - casname: ms.prop.temp.use
    descr: Main Steam Temperature
    units: degC
  - casname: ms.prop.press.use
    descr: Main Steam Pressure
    units: kPa
outputs:
    - casname: efficiency.use
      descr: Boiler Efficiency
      units: "%"
children:
  - casname: comb
    descr: Combustor
  - casname: econ
    descr: Economiser
  - casname: furn
    descr: Furnace
---


<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on boiler instances:</p>
<table border="1" class="docutils">
<colgroup>
<col width="23%">
<col width="35%">
<col width="42%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Efficiency</td>
<td>ASME PTC 4, S 5.7</td>
<td>.efficiency.gross.use</td>
</tr>
<tr class="row-odd"><td>.</td>
<td>&nbsp;</td>
<td>.efficiency.gross.percentage</td>
</tr>
<tr class="row-even"><td>Heat Rate</td>
<td>&nbsp;</td>
<td>.efficiency.gross.heatrate</td>
</tr>
</tbody>
</table>
</div>



<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Net Heat Output</strong></p>
<p>The net boiler heat output is defined as:</p>
<div class="math">
<p><span class="math">$$Q_{blrout} = Q_{MS} + Q_{HRH} - Q_{CRH}- Q_{FW} - Q_{SHS} - Q_{RHS}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$Q_{MS}$</span> = Heat Flow from Main Steam (kW) (blr.ms_l.energyFlow.use + blr.ms_r.energyFlow.use)</li>
<li><span class="math">$Q_{HRH}$</span> = Heat Flow to Hot Reheat (kW) (blr.hrh_l.energyFlow.use + blr.hrh_r.energyFlow.use)</li>
<li><span class="math">$Q_{CRH}$</span> = Heat Flow from Cold Reheat (kW) (blr.crh_l.energyFlow.use + blr.crh_r.energyFlow.use)</li>
<li><span class="math">$Q_{FW}$</span> = Heat Flow from Feedwater (kW) (blr.fw_l.energyFlow.use + blr.fw_r.energyFlow.use)</li>
<li><span class="math">$Q_{SHS}$</span> = Heat Flow from Superheat Sprays (kW) blr.shs.energyFlow.use</li>
<li><span class="math">$Q_{RHS}$</span> = Heat Flow from Reheat Sprays (kW) blr.rhs.energyFlow.use</li>
</ul>
</div><p><strong>Efficiency</strong></p>
<div class="math">
<p><span class="math">$$boiler \ efficiency = \frac{net \ heat \ output}{fuel energy} \times 100\%$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$ob.blr.netheatoutput.use = Qms + Qhrh - Qcrh - Qfw - Qshs - Qrhs$$</span></p>
</div></div>
