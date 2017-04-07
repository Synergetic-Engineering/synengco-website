---
layout: performance-calc
title: Baghouse Filter

permalink: /:collection/:path/
description: Baghouse filter component
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are applied to all baghouse filter instances.</p>
<table border="1" class="docutils">
<colgroup>
<col width="35%">
<col width="38%">
<col width="27%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Power Consumption</td>
<td>&nbsp;</td>
<td>.energyTotal.use</td>
</tr>
<tr class="row-odd"><td>Pressure Drop</td>
<td>&nbsp;</td>
<td>.c1.dP.use</td>
</tr>
<tr class="row-even"><td>Collection Efficiency</td>
<td>&nbsp;</td>
<td>.efficiency.use</td>
</tr>
</tbody>
</table>


<p>The pressure drop over the baghouse filter is measured by:</p>
<div class="math">
<p><span class="math">$$bh.c1.dP.use = bh.c1in.prop.pres.use - bh.c1out.prop.press.use$$</span></p>
</div></div>

<p>Under construction.</p>
