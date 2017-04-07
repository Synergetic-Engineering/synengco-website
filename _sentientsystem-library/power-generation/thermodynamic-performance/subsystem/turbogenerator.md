---
layout: performance-calc
title: Turbogenerator
permalink: /:collection/:path/
description: The turbogenerator subsystem ...
inputs:
  - casname: gen.c2out.energyFlow.use
    descr: Generator Load
    units: kW
  - casname: ms.prop.temp.use
    descr: Main Steam Temperature
    units: degC
  - casname: ms.prop.press.use
    descr: Main Steam Pressure
    units: kPa
outputs:
    - casname: efficiency.use
      descr: Turbine Efficiency
      units: "%"
children:
  - casname: gen
    descr: Generator
  - casname: hpt
    descr: High Pressure Turbine
  - casname: cond
    descr: Condenser
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on station instances:</p>
<table border="1" class="docutils">
<colgroup>
<col width="22%">
<col width="34%">
<col width="43%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Efficiency</td>
<td>ASME PTC 6, S 5.10</td>
<td>.efficiency.gross.heatrate</td>
</tr>
<tr class="row-odd"><td>Heat Rate</td>
<td>ASME PTC 6, S 5.7</td>
<td>.efficiency.gross.use</td>
</tr>
<tr class="row-even"><td>Heat Rate</td>
<td>ASME PTC 6, S 5.7</td>
<td>.efficiency.gross.percentage</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Net Heat Input</strong></p>
<p>Net Heat input is calculated as</p>
<div class="math">
<p><span class="math">$$net \ heat \ input = Q_{MS} - Q_{FW} + Q_{HRH} - Q_{CRH} - Q_{RHS}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$Q_{MS}$</span> = Heat Flow from Main Steam (kW) (blr.ms_1.energyFlow.use + blr.ms_r.energyFlow.use)</li>
<li><span class="math">$Q_{FW}$</span> = Heat Flow from Feedwater (kW) (blr.fw_1.energyFlow.use + blr.fw_r.energyFlow.use)</li>
<li><span class="math">$Q_{HRH}$</span> = Heat Flow to Hot Reheat (kW) (blr.hrh_1.energyFlow.use + blr.hrh_r.energyFlow.use)</li>
<li><span class="math">$Q_{CRH}$</span> = Heat Flow from Cold Reheat (kW) (blr.crh_1.energyFlow.use + blr.crh_r.energyFlow.use)</li>
<li><span class="math">$Q_{RHS}$</span> = Heat Flow from Reheat Sprays (kW) blr.rhs.energyFlow.use</li>
</ul>
<p>In CAS Terms:</p>
<div class="math">
<p><span class="math">$$ob.netheatinput.use =$$</span></p>
</div><p><span class="math">$$\qquad ob.tcv.c1in.energyFlow.use - ob.hp6.c1out.energyFlow.use +$$</span></p>
<p><span class="math">$$\qquad ob.n2Mixer.c1in.energyFlow.use - ob.s6.c1out.energyFlow.use - ob.s7.c2out.energyFlow.use$$</span></p>
<p><strong>Effectiveness</strong></p>
<div class="math">
<p><span class="math">$$e = \frac{\Delta h}{\Delta h + T_o \Delta s}$$</span></p>
</div><p><strong>Heat Rate</strong></p>
<div class="math">
<p><span class="math">$$HR = \frac{net \ heat \ to \ cycle}{output}$$</span></p>
</div><p><strong>Efficiency</strong></p>
<div class="math">
<p><span class="math">$$\eta = \frac{energy \ flow \ out}{net \ heat \ input}$$</span></p>
</div><p>In CAS Terms:</p>
<div class="math">
<p><span class="math">$$ob.efficiency.gross.use = ob.gen.c2out.energyFlow.use / ob.netheatinput.use$$</span></p>
</div></div>
