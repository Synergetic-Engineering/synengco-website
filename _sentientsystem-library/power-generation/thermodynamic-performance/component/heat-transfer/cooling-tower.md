---
layout: performance-calc
title: Cooling Tower
permalink: /:collection/:path/
description: Cooling tower component
---


<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on cooling tower instances.</p>
<table border="1" class="docutils">
<colgroup>
<col width="37%">
<col width="38%">
<col width="25%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>Approach Temperature</td>
<td>ASME PTC 23, S 2.2</td>
<td>.approach.use</td>
</tr>
<tr class="row-odd"><td>Cooling Tower Utility</td>
<td>&nbsp;</td>
<td>.util.use</td>
</tr>
<tr class="row-even"><td>Range</td>
<td>ASME PTC 23, S 2.2</td>
<td>.c1.dT.use</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Approach Temperature</strong></p>
<div class="math">
<p><span class="math">T_{approach} = T_{cwout} - T_{wb}</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">.approach.use = .c1out.prop.temp.use - .c2in.prop.wetBulb.use</span></p>
</div><p><strong>Range</strong></p>
<div class="math">
<p><span class="math">T_{range} = T_{cwin} - T_{cwout}</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">.c1.dT.use = .c1in.prop.temp.use - .c1out.prop.temp.use</span></p>
</div><p><strong>Utility</strong></p>
<div class="math">
<p><span class="math">Util = \frac{T_{range}}{T_{cwin} - T_{wb}}</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">.util.use = \frac{T_{range}}{T_{cwin} - T_{wb}}</span></p>
</div></div>
