---
layout: performance-calc
title: Air Heater
permalink: /:collection/:path/
description: Air heater component
---


<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on airheater instances:</p>
<table border="1" class="docutils">
<colgroup>
<col width="35%">
<col width="36%">
<col width="29%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>X Factor</td>
<td>ASME PTC 4.1, S 7.07</td>
<td>.xFactor.use</td>
</tr>
<tr class="row-odd"><td>Gas Side Efficiency</td>
<td>ASME PTC 4.1, S 7.01</td>
<td>.gasEfficiency.use</td>
</tr>
<tr class="row-even"><td>Air Temperature Rise</td>
<td>&nbsp;</td>
<td>.c1.dT.use</td>
</tr>
<tr class="row-odd"><td>Gas Temperature Drop</td>
<td>ASME PTC 4.1, S 7.12</td>
<td>.c2.dT.use</td>
</tr>
<tr class="row-even"><td>Gas Side Pressure Drop</td>
<td>ASME PTC 4.1, S 7.14</td>
<td>.c2.dP.use</td>
</tr>
<tr class="row-odd"><td>Air Side Pressure Drop</td>
<td>ASME PTC 4.1, S 7.15</td>
<td>.c1.dP.use</td>
</tr>
</tbody>
</table>
</div>


<div class="section" id="calculations">
<h2>Calculations<a class="headerlink" href="#calculations" title="Permalink to this headline"></a></h2>
<p><strong>Air Heater Inlet Temp</strong></p>
<p>Air Heater inlet tempearture.</p>
<div class="math">
<p><span class="math">T_{1in} = \frac{\dot{M}_{PA} \times T_{PAin} + \dot{M}_{SA} \times T_{SAin}}{\dot{M}_{PA} + \dot{M}_{SA}}</span></p>
</div><p>Where</p>
<blockquote>
<div><ul class="simple">
<li><span class="math">\dot{M}_{PA}</span> = PA in mass flow <span class="math">(\frac{kg}{s})</span></li>
<li><span class="math">T_{PAin}</span> = PA in temperature <span class="math">(^{0}C)</span></li>
<li><span class="math">\dot{M}_{SA}</span> = SA in mass flow <span class="math">(\frac{kg}{s})</span></li>
<li><span class="math">T_{SAin}</span> = SA in temperature <span class="math">(^{0}C)</span></li>
</ul>
</div></blockquote>
<p>In CAS Terms:</p>
<div class="math">
<p><span class="math">T1in  = \frac{(ob.c1PAin.massFlow.use  * PAin + ob.c1SAin.massFlow.use  * SAin)}{(ob.c1PAin.massFlow.use + ob.c1SAin.massFlow.use)}</span></p>
</div><p><strong>Air Heater Outlet Temp</strong></p>
<p>Air Heater outlet tempearture.</p>
<div class="math">
<p><span class="math">T_{1out} = \frac{\dot{M}_{PA} \times T_{PAout} + \dot{M}_{SA} \times T_{SAout}}{\dot{M}_{PA} + \dot{M}_{SA}}</span></p>
</div><p>Where</p>
<blockquote>
<div><ul class="simple">
<li><span class="math">\dot{M}_{PA}</span> = PA out mass flow <span class="math">(\frac{kg}{s})</span></li>
<li><span class="math">T_{PAout}</span> = PA out temperature <span class="math">(^{0}C)</span></li>
<li><span class="math">\dot{M}_{SA}</span> = SA out mass flow <span class="math">(\frac{kg}{s})</span></li>
<li><span class="math">T_{SAout}</span> = SA out temperature <span class="math">(^{0}C)</span></li>
</ul>
</div></blockquote>
<p>In CAS Terms:</p>
<div class="math">
<p><span class="math">T1out = \frac{(ob.c1PAout.massFlow.use * PAout + ob.c1SAout.massFlow.use * SAout)}{(ob.c1PAout.massFlow.use + ob.c1SAout.massFlow.use)}</span></p>
</div><p><strong>Gas Side Efficiency</strong></p>
<p>The Gas Side Efficiency describes the heat transfer inside the air heater and is
defined as the ratio of gas temperature drop, corrected for no leakage, to
temperature head.  It describes the utilisation of the gas side temperature head,
which is defined by the temperature of gas entering air heater and temperature of
air entering air heater, corrected for no leakage.</p>
<p>The Gas Side Efficiency is defined as:</p>
<div class="math">
<p><span class="math">\eta _{G} = 100 \times \frac{t_{Gin} - t_{Gout(NL)}}{t_{Gin} - t_{Ain}}</span></p>
</div><dl class="docutils">
<dt>Where:</dt>
<dd><ul class="first last simple">
<li><span class="math">\eta _{G}</span> = gas side efficiency (%)</li>
<li><span class="math">t_{Gin}</span> = air heater gas inlet temperature <span class="math">(^{0}C)</span></li>
<li><span class="math">t_{Gout(NL)}</span> = air heater gas outlet temperature corrected for no leakage <span class="math">(^{0}C)</span></li>
<li><span class="math">t_{Ain}</span> = the air heater air inlet temperature <span class="math">(^{0}C)</span></li>
</ul>
</dd>
</dl>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">airheater.gasEfficiency.use = 100 \times  \frac{(ah.c2in.prop.temp.use - ah.c2out.prop.temp.undiluted)}{(ah.c2in.prop.temp.use - ah.c1in.prop.temp.use)}</span></p>
</div><p><strong>Air Leakage</strong></p>
<p>The air heater leakage represents the amount of higher pressure Primary/Secondary
Air leaking into the lower pressure gas stream due to gaps in the seals between
air and gas sections:</p>
<div class="math">
<p><span class="math">A_{(L)} = 100 \times \frac{W_{Gout} - W_{Gin}}{W_{Gin}}</span></p>
</div><dl class="docutils">
<dt>Where:</dt>
<dd><ul class="first last simple">
<li><span class="math">A_{(L)}</span> = air heater leakage (%)</li>
<li><span class="math">W_{Gout}</span> = mass flow of air heater outlet wet gas per kg of As Fired Fuel (kg/kg Fuel)</li>
<li><span class="math">W_{Gin}</span> = mass flow of air heater inlet wet gas per kg of As Fired Fuel (kg/kg Fuel)</li>
</ul>
</dd>
</dl>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">ah.leakage.use = \frac{ah.c2out.massFlow.use - ah.c2in.massFlow.use}{ah.c2in.massFlow.use}</span></p>
</div><div class="math">
<p><span class="math">ah.leakage.percentage = 100 \times \frac{ah.c2out.massFlow.use - ah.c2in.massFlow.use}{ah.c2in.massFlow.use}</span></p>
</div><p>Note that the air heater leakage is best determined from the <span class="math">O_{2}/CO_{2}</span>
content of the Air heater of the inlet and outlet gas streams.  In the absence of
these measurements the leakage must be determined by air heater leakage test and
used as an input to the performance calculations.</p>
<p>Air heater leakage can be calculated from O2 quantities</p>
<div class="math">
<p><span class="math">A_{(L)} = \frac{(O_{2out} - O_{2in}) \times 0.9 \times 100 \%}{21 - O_{2out}}</span></p>
</div><p>In CAS Terms:</p>
<div class="math">
<p><span class="math">ob.ah.leakage.use = (ob.ah.gasout.prop.mix.o2.use - ob.blr.econ.c2out.prop.mix.o2) * 0.9 * 100 / (21 - ob.ah.gasout.prop.mix.o2.use)</span></p>
</div><p><strong>X-Ratio</strong></p>
<p>The X-Ratio is ratio of the temperature difference of air passing through the heater
to the difference of gas passing through the air heater.  This term describes the
thermal performance of the air heater.</p>
<p>X-Ratio is defined as:</p>
<div class="math">
<p><span class="math">\chi _{R} = \frac{t_{Gin} - t_{Gout(NL)}}{t_{Aout} - t_{Ain}}</span></p>
</div><dl class="docutils">
<dt>Where:</dt>
<dd><ul class="first last simple">
<li><span class="math">\chi _{R}</span> = X-Ratio (unitless)</li>
<li><span class="math">t_{Gin}</span> = air heater gas inlet temperature <span class="math">(^{0}C)</span></li>
<li><span class="math">t_{Gout(NL)}</span> = air heater gas outlet temperature corrected for no leakage <span class="math">(^{0}C)</span></li>
<li><span class="math">t_{Aout}</span> = the air heater air outlet temperature <span class="math">(^{0}C)</span></li>
<li><span class="math">t_{Ain}</span> = the air heater air inlet temperature <span class="math">(^{0}C)</span></li>
</ul>
</dd>
</dl>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">ah.xratio.use = \frac{ah.c2in.prop.temp.use - ah.c2out.prop.temp.undiluted}{ah.c1out.prop.temp.use - ah.c2in.prop.temp.use}</span></p>
</div><p><strong>Gas Side Temerature Drop</strong></p>
<div class="math">
<p><span class="math">\Delta T_{GAS} = T_{GAS_{IN}} - T_{GAS_{OUT}}</span></p>
</div><p>Where:</p>
<blockquote>
<div><ul class="simple">
<li><span class="math">T_{GAS_{IN}}</span> = gas inlet temperature <span class="math">(^{0}C)</span></li>
<li><span class="math">T_{GAS_{OUT}}</span> = gas outlet temperature <span class="math">(^{0}C)</span></li>
</ul>
</div></blockquote>
<p>In CAS Terms:</p>
<div class="math">
<p><span class="math">ob.c2.dT.use = ob.c2in.prop.temp.use - ob.c2out.prop.temp.use</span></p>
</div><p><strong>Gas Side Pressure Drop</strong></p>
<div class="math">
<p><span class="math">\Delta P_{GAS} = P_{GAS_{IN}} - P_{GAS_{OUT}}</span></p>
</div><p>Where:</p>
<blockquote>
<div><ul class="simple">
<li><span class="math">P_{GAS_{IN}}</span> = gas inlet pressure <span class="math">(kPa)</span></li>
<li><span class="math">P_{GAS_{OUT}}</span> = gas outlet pressure <span class="math">(kPa)</span></li>
</ul>
</div></blockquote>
<p>In CAS Terms:</p>
<div class="math">
<p><span class="math">ob.c2.dP.use = ob.c2in.prop.press.use - ob.c2out.prop.press.use</span></p>
</div><p><strong>Air Side Pressure Drop</strong></p>
<div class="math">
<p><span class="math">\Delta P_{AIR} = P_{AIR_{IN}} - P_{AIR_{OUT}}</span></p>
</div><p>Where:</p>
<blockquote>
<div><ul class="simple">
<li><span class="math">P_{AIR_{IN}}</span> = gas inlet pressure <span class="math">(kPa)</span></li>
<li><span class="math">P_{AIR_{OUT}}</span> = gas outlet pressure <span class="math">(kPa)</span></li>
</ul>
</div></blockquote>
<p>In CAS Terms:</p>
<div class="math">
<p><span class="math">ob.c1.dP.use = ob.c1PAin.prop.press.use - ob.c1PAout.prop.press.use</span></p>
</div><p><strong>Gas Outlet Temperature No Leakage</strong></p>
<p>To determine the gas outlet temperature corrected for no leakage:</p>
<div class="math">
<p><span class="math">t_{Gout(NL)} =  \frac{A_{(L)} \times c_{pA} \times (t_{Gout} - t_{Ain})}{100 \times c_{pG}}</span></p>
</div><dl class="docutils">
<dt>Where:</dt>
<dd><ul class="first last simple">
<li><span class="math">A_{(L)}</span> = air heater leakage (%)</li>
<li><span class="math">t_{Gout}</span> = air heater gas outlet temperature <span class="math">(^{0}C)</span></li>
<li><span class="math">c_{pA}</span> = mean specific heat between gas out temperature and air inlet temperature (kJ/kg.K)</li>
<li><span class="math">c_{pG}</span> = mean specific heat between air heater gas outlet temperature <span class="math">(t_{Gout})</span> and air heater gas outlet temperature corrected for no leakage <span class="math">(t_{Gout(NL)})</span> (kJ/kg.K)</li>
</ul>
</dd>
</dl>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">c2out.prop.temp.undiluted = \frac{ah.leakage.use}{ah.c2in.massFlow.use} \times \frac{ah.cpair.dontknow \times (ah.c2out.prop.temp.use - ah.c1in.prop.temp.use)}{ah.cpgas.dontknow}</span></p>
</div><p>This may be calculated in the Boiler ASME Efficiency calculation.</p>
</div>
