---
layout: performance-calc
title: Air & Gas
permalink: /:collection/:path/
description: Air and gas subsystem
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on airgas instances:</p>
<table border="1" class="docutils">
<colgroup>
<col width="36%">
<col width="31%">
<col width="32%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Total Coal Flow</td>
<td>&nbsp;</td>
<td>.totalCoalFlow.use</td>
</tr>
<tr class="row-odd"><td>Total Milling Power</td>
<td>&nbsp;</td>
<td>.totalMillPower.use</td>
</tr>
<tr class="row-even"><td>Total PA Flow</td>
<td>&nbsp;</td>
<td>.totalPaFlow.use</td>
</tr>
<tr class="row-odd"><td>Total SA Flow</td>
<td>&nbsp;</td>
<td>.totalSaFlow.use</td>
</tr>
<tr class="row-even"><td>Milling Power to Coal Flow</td>
<td>&nbsp;</td>
<td>.millPowerCoalRatio.use</td>
</tr>
<tr class="row-odd"><td>PA Flow to Coal Flow</td>
<td>&nbsp;</td>
<td>.PaFlowCoalRatio.use</td>
</tr>
</tbody>
</table>
</div>

<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Motor Energy</strong></p>
<div class="math">
<p><span class="math">$$motor \ energy = \frac{\sqrt{3} \times pf \times v \times A}{1000}$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$ob.c2in.energyFlow.use = 3**0.5 * ob.powerFactor.use * ob.c2in.amps.use / 1000.0$$</span></p>
</div><p><strong>Total Coal Flow</strong></p>
<div class="math">
<p><span class="math">$$Total\ Coal\ Flow = \sum mills\_output\_fuelflow$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$Total\ Coal\ Flow = \sum mill.coalIn.massFlow.meas$$</span></p>
</div><p><strong>Total Milling Power</strong></p>
<div class="math">
<p><span class="math">$$Total\ Milling\ Power = \sum mills\_load$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$Total\ Milling\ Power = \sum mill.motor.c1in.energyFlow.use$$</span></p>
</div><p><strong>Total PA Flow</strong></p>
<div class="math">
<p><span class="math">$$Total\ PA\ Flow = PAF\_A\ outlet\ air\ flow + PAF\_B\ outlet\ air\ flow$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$Total\ PA\ Flow = paf\_a.c1out.massFlow.use + paf\_b.c1out.massFlow.use$$</span></p>
</div><p><strong>Total SA Flow</strong></p>
<div class="math">
<p><span class="math">$$Total\ SA\ Flow = FDF\_A\ outlet\ air\ flow + FDF\_B\ outlet\ air\ flow$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$Total\ SA\ Flow = fdf\_a.c1out.massFlow.use + fdf\_b.c1out.massFlow.use$$</span></p>
</div><p><strong>Milling Power to Coal Ratio</strong></p>
<div class="math">
<p><span class="math">$$milling \ power \ ratio = \frac{motor \ energy}{coalin \ massflow}$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$ob.millPowerCoalRatio.use = ob.totalMillPower.use / ob.totalCoalFlow.use$$</span></p>
</div><p><strong>PA Flow to Coal Flow</strong></p>
<div class="math">
<p><span class="math">$$PA \ Flow \ Ratio = \frac{PA \ Flow}{Coal \ Flow}$$</span></p>
</div><p>In CAS Terms:</p>
<div class="math">
<p><span class="math">$$ob.PaFlowCoalRatio.use = ob.totalPaFlow.use / ob.totalCoalFlow.use$$</span></p>
</div></div>
