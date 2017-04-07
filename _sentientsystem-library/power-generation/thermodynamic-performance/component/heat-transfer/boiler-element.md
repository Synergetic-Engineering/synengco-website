---
layout: performance-calc
title: Boiler Element
permalink: /:collection/:path/
description: Boiler element component
---

<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are applied to all boiler element instances:</p>
<table border="1" class="docutils">
<colgroup>
<col width="45%">
<col width="28%">
<col width="28%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>LMTD (Log Mean Temperature Difference)</td>
<td>ASME PTC 12.2,S 6.9</td>
<td>.LMTD.use</td>
</tr>
<tr class="row-odd"><td>Thermal Conductance</td>
<td>&nbsp;</td>
<td>.thermalConductance.use</td>
</tr>
</tbody>
</table>
</div>

<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>LMTD (Co current)</strong></p>
<div class="math">
<p><span class="math">$$LMTD = \frac{\left ( T_{gasin} - T_{steamin} \right ) - \left ( T_{gasout} - T_{steamout} \right )}{In \left ( \frac{T_{gasin} - T_{steamin}}{T_{gasout} - T_{steamout}} \right )}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$T_{gasin}$</span> = Temperature of gas entering element <span class="math">$(^{o}C)$</span></li>
<li><span class="math">$T_{steamin}$</span> = Temperature of gas entering element <span class="math">$(^{o}C)$</span></li>
<li><span class="math">$T_{gasout}$</span> = Temperature of gas entering element <span class="math">$(^{o}C)$</span></li>
<li><span class="math">$T_{steamout}$</span> = Temperature of gas entering element <span class="math">$(^{o}C)$</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$element.lmtd.use = \frac{(ob.c2in.prop.temp.use - ob.c2in.prop.temp.use) - (ob.c2out.prop.temp.use - ob.c1in.prop.temp.use)}{In \left ( \frac{ob.c2in.prop.temp.use - ob.c1in.prop.temp.use}{ob.c2out.prop.temp.use - ob.c1out.prop.temp.use} \right )}$$</span></p>
</div><p><strong>LMTD (Counter current)</strong></p>
<div class="math">
<p><span class="math">$$LMTD = \frac{\left ( T_{gasin} - T_{steamin} \right ) - \left ( T_{gasout} - T_{steamout} \right )}{In \left ( \frac{T_{gasin} - T_{steamout}}{T_{gasout} - T_{steamin}} \right )}$$</span></p>
</div><p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$element.lmtd.use = \frac{(ob.c2in.prop.temp.use - ob.c2in.prop.temp.use) - (ob.c2out.prop.temp.use - ob.c1in.prop.temp.use)}{In \left ( \frac{ob.c2in.prop.temp.use - ob.c1out.prop.temp.use}{ob.c2out.prop.temp.use - ob.c1in.prop.temp.use} \right )}$$</span></p>
</div><p><strong>Thermal Conductance</strong></p>
<p>The thermal conductance is characterising parameter that incorporates the heat
transfer coefficient and the geometry of the boiler elements and is defined as:</p>
<div class="math">
<p><span class="math">$$TC = \frac{Q}{\Delta T_{LM}}$$</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">$TC$</span> = Thermal Conductance (kW/<span class="math">$^{o}C$</span>)</li>
<li><span class="math">$Q$</span> = Heat Flow from steam/gas (kW)</li>
<li><span class="math">$\Delta T_{LM}$</span> = Log Mean Temperature Difference <span class="math">$(^{o}C)$</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">$$element.thermalConductance.use = \frac{element.c1.dQ.use}{element.lmtd.use}$$</span></p>
</div><p>A comparison of the actual and design values together with the components
historical values, will determine whether the boiler element is operating
within an acceptable band from its design point.</p>
</div>
