---
layout: performance-calc
title: Condenser
permalink: /:collection/:path/
description: Condenser component
---


<div class="section" id="performance">
<h2>Performance<a class="headerlink" href="#performance" title="Permalink to this headline"></a></h2>
<p>The following performance calculations are available on condenser instances:</p>
<table border="1" class="docutils">
<colgroup>
<col width="29%">
<col width="33%">
<col width="38%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Calculation</strong></td>
<td><strong>Reference</strong></td>
<td><strong>Output Tags</strong></td>
</tr>
<tr class="row-even"><td>CWDP</td>
<td>&nbsp;</td>
<td>.c2.dP.use</td>
</tr>
<tr class="row-odd"><td>CWR</td>
<td>ASME PTC 12.2(6.9)</td>
<td>.c2.dT.use</td>
</tr>
<tr class="row-even"><td>LMTD</td>
<td>ASME PTC 12.2(6.9)</td>
<td>.LMTD.use</td>
</tr>
<tr class="row-odd"><td>Heat Transfer</td>
<td>&nbsp;</td>
<td>.c2.dQ.use</td>
</tr>
<tr class="row-even"><td>Thermal Conductance</td>
<td>&nbsp;</td>
<td>.thermalConductance.use</td>
</tr>
<tr class="row-odd"><td>TTD</td>
<td>ASME PTC 12.2(6.9)</td>
<td>.ttd.use</td>
</tr>
<tr class="row-even"><td>CF</td>
<td>&nbsp;</td>
<td>.condenserCleanliness.use</td>
</tr>
<tr class="row-odd"><td>Sub</td>
<td>&nbsp;</td>
<td>.subCooling.use</td>
</tr>
</tbody>
</table>
<p><strong>LMTD</strong></p>
<p>The LMTD (Log Mean Temperature Difference) describes the mean temperature difference between
cooling water and condensing steam (PTC 12.2 5.1.2).</p>
<div class="math">
<p><span class="math">LMTD_{cond} = \frac{T_{cwout} - T_{cwin}}{In\frac{T_{satsteamin} - T_{cwin}}{T_{satsteamin} - T_{cwout}}}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">T_{cwout}</span> = Hot cooling water temperature <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{cwin}</span> = Cold cooling water temperature <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{satsteamin}</span> = Saturation temperature of condenser back pressure <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">cond.LMTD.use = \frac{cond.c2.dT.use}{In\frac{cond.c1in.prop.satTemp.use - cond.c2in.prop.temp.use}{cond.c1in.prop.satTemp.use - cond.c2out.prop.temp.use}}</span></p>
</div><p><strong>TTD</strong></p>
<p>The TTD (Terminal Temperature Difference) describes the heat transfer and the cleanliness of the heat exchange area.</p>
<div class="math">
<p><span class="math">TTD_{cond} = T_{satsteamin} - T_{cwout}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">TTD_{cond}</span> = TTD condenser <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms (where ”.” represents a condenser):</p>
<div class="math">
<p><span class="math">.ttd.use = .c1in.prop.satTemp.use - .c2out.prop.temp.use</span></p>
</div><p><strong>Thermal Conductance</strong></p>
<p>The condenser thermal conductance is:</p>
<div class="math">
<p><span class="math">TC = \frac{Q_{stm}}{LMTD}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">Q_{stm}</span> = Heat flow from condensing steam (kW)</li>
<li><span class="math">LMTD</span> = Log mean temperature difference <span class="math">(^{o}C)</span></li>
<li><span class="math">TC</span> = thermal conductance <span class="math">(kW/^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">cond.thermalConductance.use = \frac{cond.c1.dQ.use}{cond.lmtd.use}</span></p>
</div><p><strong>Condenser Cleanliness</strong></p>
<p>The condenser cleanliness is determined by comparing the design Heat Transfer
Co-efficient to the actual heat transfer co-efficient.</p>
<p>The actual heat transfer co-efficient (from water side) can be determined by
(where ob = cond, PTC 12.2 5.1.2):</p>
<div class="math">
<p><span class="math">U_{meas} = \frac{Q_{cw}}{LMTD \times N_{tubes} \times L_{tubes} \times \pi \times D_{tube}}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">U_{meas}</span> = Actual heat transfer co-efficient: <span class="math">\frac {kW}{(m^2)(^{o})C}</span></li>
<li><span class="math">Q_{cw}</span> = Heat transfer from cooling water (kW)</li>
<li><span class="math">N_{tubes}</span> = Number of tubes not plugged due to condenser leaks</li>
<li><span class="math">L_{tubes}</span> = Length of tubes (m)</li>
<li><span class="math">D_{tube}</span> = Outside diameter of tube (m)</li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">cond.heatTransferCoefficient.use = \frac{cond.c2.dQ.use}{cond.LMTD.use \times cond.numberOfTubes.use \times cond.tubeLength.use \times \pi \times cond.od.use}</span></p>
</div><p>The Design Heat Transfer (cond.heatTransferCoefficient.design) can be determined
from HEI Steam Surface Condensers, Table 1):</p>
<div class="math">
<p><span class="math">Udesign = C1 \times C_{t} \times C_{m} \times C_{f}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">Udesign</span> = Design heat transfer co-efficient: <span class="math">\frac {kW}{m^2)}</span></li>
<li><span class="math">C1</span> = Uncorrected heat transfer co-efficient: <span class="math">\frac {kW}{(m^2)(^{o})C}</span></li>
<li><span class="math">C_{t}</span> = Cooling water inlet temperature correction factor <span class="math">(^{o}C)</span></li>
<li><span class="math">C_{m}</span> = Tube metal correction factor <span class="math">(^{o} C)</span></li>
<li><span class="math">C_{f}</span> = Design condenser cleanliness factor</li>
</ul>
<p>In CAS terms (where ”.” is condenser):</p>
<div class="math">
<p><span class="math">cond.heatTransferCoefficient.design = .heatTransferCoefficient.uncorr \times .coldWaterCorrection.use \times .tubeWallCorrection.use</span></p>
</div><p>From (HEI Steam Surface Condensers, Table 1), the uncorrected Heat Transfer
Co-efficient is defined as:</p>
<div class="math">
<p><span class="math">C1 = f(V_{tube})</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">V_{tube}</span> = Velocity of condenser tubes <span class="math">(m/s)</span></li>
</ul>
<p>Condenser Tube Velocity:</p>
<div class="math">
<p><span class="math">V_{tube} = \frac{VolFlow}{\pi\left ( \frac{ID}{2} \right )^{2} \times N_{tubes}}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">VolFlow</span> = Volumetric flowrate of cooling water <span class="math">(m^{3}/s)</span></li>
<li><span class="math">ID</span> = Inner diameter of tubes <span class="math">(m)</span></li>
<li><span class="math">N_{tubes}</span> = Number of tubes</li>
</ul>
<p>In CAS terms (where ”.” is a condenser):</p>
<div class="math">
<p><span class="math">.tubeVelocity.use = \frac{.c2in.volFlow.use}{\pi \times (\frac{.diameter.use}{2})^{2} \times .numberOfTubes.design}</span></p>
</div><p>The inlet temperature correction (cond.coldWaterCorrection.use) can be approximated
by the following function (interpolation from PTC):</p>
<div class="math">
<p><span class="math">C_{t} = A0 + T \times A1 + T^{2} \times A2 + T^{3} \times A3 + T^{4} \times A4 + T^{5} \times A5</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">T</span> = Cooling water inlet temperature <span class="math">(^{o}C)</span></li>
<li><span class="math">A0</span> = 0.57497</li>
<li><span class="math">A1</span> = 2.126449E-02</li>
<li><span class="math">A2</span> = 6.906916E-04</li>
<li><span class="math">A3</span> = 5.824107E-05</li>
<li><span class="math">A4</span> = 1.265904Q-06</li>
<li><span class="math">A5</span> = -9.136189E-09</li>
</ul>
<p>A correction factor (<span class="math">C_{t}</span>, cond.tupeWallCorrection Factor.use) for the
tube wall thickness and material construction is required and a table of
corrections is shown below (from HEI Steam Surface Condensers - Table 3).</p>
<table border="1" class="docutils">
<colgroup>
<col width="35%">
<col width="7%">
<col width="7%">
<col width="7%">
<col width="7%">
<col width="7%">
<col width="7%">
<col width="7%">
<col width="7%">
<col width="7%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Condenser Tube Wall Guage</strong></td>
<td><strong>25</strong></td>
<td><strong>24</strong></td>
<td><strong>23</strong></td>
<td><strong>22</strong></td>
<td><strong>20</strong></td>
<td><strong>18</strong></td>
<td><strong>16</strong></td>
<td><strong>14</strong></td>
<td><strong>12</strong></td>
</tr>
<tr class="row-even"><td><strong>Tube Materials</strong></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr class="row-odd"><td>Admiralty Metal</td>
<td>1.03</td>
<td>1.03</td>
<td>1.02</td>
<td>1.02</td>
<td>1.01</td>
<td>1</td>
<td>0.98</td>
<td>0.96</td>
<td>0.93</td>
</tr>
<tr class="row-even"><td>Arsenical Copper</td>
<td>1.04</td>
<td>1.04</td>
<td>1.04</td>
<td>1.03</td>
<td>1.03</td>
<td>1.02</td>
<td>1.01</td>
<td>1.00</td>
<td>0.98</td>
</tr>
<tr class="row-odd"><td>Copper Iron 194</td>
<td>1.04</td>
<td>1.04</td>
<td>1.04</td>
<td>1.04</td>
<td>1.03</td>
<td>1.03</td>
<td>1.02</td>
<td>1.01</td>
<td>1.00</td>
</tr>
<tr class="row-even"><td>Aluminum Brass</td>
<td>1.03</td>
<td>1.02</td>
<td>1.02</td>
<td>1.02</td>
<td>1.01</td>
<td>0.99</td>
<td>0.97</td>
<td>0.95</td>
<td>0.92</td>
</tr>
<tr class="row-odd"><td>Aluminum Bronze</td>
<td>1.02</td>
<td>1.02</td>
<td>1.01</td>
<td>1.01</td>
<td>1.00</td>
<td>0.98</td>
<td>0.96</td>
<td>0.93</td>
<td>0.89</td>
</tr>
<tr class="row-even"><td>90-10 Cu-Ni</td>
<td>1.00</td>
<td>0.99</td>
<td>0.99</td>
<td>0.98</td>
<td>0.96</td>
<td>0.93</td>
<td>0.89</td>
<td>0.85</td>
<td>0.80</td>
</tr>
<tr class="row-odd"><td>70-30 Cu-Ni</td>
<td>0.97</td>
<td>0.97</td>
<td>0.96</td>
<td>0.95</td>
<td>0.92</td>
<td>0.88</td>
<td>0.83</td>
<td>0.78</td>
<td>0.71</td>
</tr>
<tr class="row-even"><td>Cold Rolled LCS</td>
<td>1.00</td>
<td>1.00</td>
<td>0.99</td>
<td>0.98</td>
<td>0.97</td>
<td>0.93</td>
<td>0.89</td>
<td>0.85</td>
<td>0.80</td>
</tr>
<tr class="row-odd"><td>300 Series SS</td>
<td>0.91</td>
<td>0.90</td>
<td>0.88</td>
<td>0.86</td>
<td>0.82</td>
<td>0.75</td>
<td>0.69</td>
<td>0.62</td>
<td>0.54</td>
</tr>
<tr class="row-even"><td>Titanium</td>
<td>0.95</td>
<td>0.94</td>
<td>0.92</td>
<td>0.91</td>
<td>0.88</td>
<td>0.82</td>
<td>0.77</td>
<td>0.71</td>
<td>0.63</td>
</tr>
<tr class="row-odd"><td>UNS N08367</td>
<td>0.90</td>
<td>0.89</td>
<td>0.87</td>
<td>0.85</td>
<td>0.81</td>
<td>0.74</td>
<td>0.67</td>
<td>0.60</td>
<td>0.52</td>
</tr>
<tr class="row-even"><td>UNS S43035</td>
<td>0.95</td>
<td>0.94</td>
<td>0.92</td>
<td>0.91</td>
<td>0.88</td>
<td>0.82</td>
<td>0.77</td>
<td>0.71</td>
<td>0.63</td>
</tr>
<tr class="row-odd"><td>UNS S44735</td>
<td>0.93</td>
<td>0.91</td>
<td>0.90</td>
<td>0.88</td>
<td>0.85</td>
<td>0.78</td>
<td>0.72</td>
<td>0.65</td>
<td>0.57</td>
</tr>
<tr class="row-even"><td>UNS S44660</td>
<td>0.93</td>
<td>0.91</td>
<td>0.90</td>
<td>0.88</td>
<td>0.85</td>
<td>0.78</td>
<td>0.72</td>
<td>0.65</td>
<td>0.57</td>
</tr>
</tbody>
</table>
<p>TUBE GAGE TO THICKNESS</p>
<table border="1" class="docutils">
<colgroup>
<col width="20%">
<col width="40%">
<col width="40%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>Guage</strong></td>
<td><strong>Thickness (in)</strong></td>
<td><strong>Thickness (mm)</strong></td>
</tr>
<tr class="row-even"><td>00</td>
<td>0.380</td>
<td>9.652</td>
</tr>
<tr class="row-odd"><td>0</td>
<td>0.340</td>
<td>8.636</td>
</tr>
<tr class="row-even"><td>1</td>
<td>0.300</td>
<td>7.62</td>
</tr>
<tr class="row-odd"><td>2</td>
<td>0.284</td>
<td>7.2136</td>
</tr>
<tr class="row-even"><td>3</td>
<td>0.259</td>
<td>6.5786</td>
</tr>
<tr class="row-odd"><td>4</td>
<td>0.238</td>
<td>6.0452</td>
</tr>
<tr class="row-even"><td>5</td>
<td>0.220</td>
<td>5.588</td>
</tr>
<tr class="row-odd"><td>6</td>
<td>0.203</td>
<td>5.1562</td>
</tr>
<tr class="row-even"><td>7</td>
<td>0.180</td>
<td>4.572</td>
</tr>
<tr class="row-odd"><td>8</td>
<td>0.165</td>
<td>4.191</td>
</tr>
<tr class="row-even"><td>9</td>
<td>0.148</td>
<td>3.7592</td>
</tr>
<tr class="row-odd"><td>10</td>
<td>0.134</td>
<td>3.4036</td>
</tr>
<tr class="row-even"><td>11</td>
<td>0.120</td>
<td>3.048</td>
</tr>
<tr class="row-odd"><td>12</td>
<td>0.109</td>
<td>2.7686</td>
</tr>
<tr class="row-even"><td>13</td>
<td>0.095</td>
<td>2.413</td>
</tr>
<tr class="row-odd"><td>14</td>
<td>0.083</td>
<td>2.1082</td>
</tr>
<tr class="row-even"><td>15</td>
<td>0.072</td>
<td>1.8288</td>
</tr>
<tr class="row-odd"><td>16</td>
<td>0.065</td>
<td>1.651</td>
</tr>
<tr class="row-even"><td>17</td>
<td>0.058</td>
<td>1.4732</td>
</tr>
<tr class="row-odd"><td>18</td>
<td>0.049</td>
<td>1.2446</td>
</tr>
<tr class="row-even"><td>19</td>
<td>0.042</td>
<td>1.0668</td>
</tr>
<tr class="row-odd"><td>20</td>
<td>0.035</td>
<td>0.889</td>
</tr>
<tr class="row-even"><td>21</td>
<td>0.032</td>
<td>0.8128</td>
</tr>
<tr class="row-odd"><td>22</td>
<td>0.028</td>
<td>0.7112</td>
</tr>
<tr class="row-even"><td>23</td>
<td>0.025</td>
<td>0.635</td>
</tr>
<tr class="row-odd"><td>24</td>
<td>0.022</td>
<td>0.5588</td>
</tr>
</tbody>
</table>
<p>Diametric Tube Constant</p>
<table border="1" class="docutils">
<colgroup>
<col width="14%">
<col width="11%">
<col width="41%">
<col width="34%">
</colgroup>
<tbody valign="top">
<tr class="row-odd"><td><strong>OD inch</strong></td>
<td><strong>mm</strong></td>
<td><strong>C (BTU/(F.ft**2.hr)/(ft/s)^0.5</strong></td>
<td><strong>C (kW/(K.m^2))/(m/s)^0.5</strong></td>
</tr>
<tr class="row-even"><td>5/8</td>
<td>15.875</td>
<td>267</td>
<td>2.7459805034262077</td>
</tr>
<tr class="row-odd"><td>3/4</td>
<td>19.05</td>
<td>267</td>
<td>2.7459805034262077</td>
</tr>
<tr class="row-even"><td>7/8</td>
<td>22.225</td>
<td>263</td>
<td>2.7049724701564823</td>
</tr>
<tr class="row-odd"><td>1</td>
<td>25.400</td>
<td>263</td>
<td>2.7049724701564823</td>
</tr>
<tr class="row-even"><td>1 1/8</td>
<td>28.575</td>
<td>259</td>
<td>2.6637108536421561</td>
</tr>
<tr class="row-odd"><td>1 1/4</td>
<td>31.750</td>
<td>259</td>
<td>2.6637108536421561</td>
</tr>
<tr class="row-even"><td>1 3/8</td>
<td>34.925</td>
<td>255</td>
<td>2.6225760287501299</td>
</tr>
<tr class="row-odd"><td>1 1/2</td>
<td>38.100</td>
<td>255</td>
<td>2.6225760287501299</td>
</tr>
<tr class="row-even"><td>1 5/8</td>
<td>41.275</td>
<td>251</td>
<td>2.5814230907692042</td>
</tr>
<tr class="row-odd"><td>1 3/4</td>
<td>44.450</td>
<td>251</td>
<td>2.5814230907692042</td>
</tr>
<tr class="row-even"><td>1 7/8</td>
<td>47.625</td>
<td>247</td>
<td>2.5402882658771784</td>
</tr>
<tr class="row-odd"><td>2</td>
<td>50.800</td>
<td>247</td>
<td>2.5402882658771784</td>
</tr>
</tbody>
</table>
<blockquote>
<div><ul class="simple">
<li>There are 29920</li>
<li>Tubes are OD 7/8 inch, 22.225 mm</li>
<li>Guage 22, thickness 0.028 inch, 0.71 mm</li>
<li>Correction Factor = 0.84</li>
<li>There are 2080</li>
<li>Tubes are 7/8 inch, 22.225 mm</li>
<li>Guage 19.5, 0.0393, 1 mm</li>
<li>Correction Factor = 0.79</li>
</ul>
</div></blockquote>
<p><strong>Figure 1: Condenser Tube Construction Correction Factors (FM)</strong></p>
<div class="math">
<p><span class="math">U_{design} = C1 \times C_{t} \times C_{m}</span></p>
</div><p>In CAS terms (where ”.” is condenser):</p>
<p>Cleanliness Factor is the ratio of the condenser heat transfer co-efficient to
the clean (design) heat transfer co-efficient:</p>
<div class="math">
<p><span class="math">\frac{U_{meas}}{U_{design}}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">U_{meas}</span> = Heat transfer co-efficient from cooling water heat flow <span class="math">(kW/m^{2})</span></li>
</ul>
<p>In CAS terms (where ”.” is condenser):</p>
<div class="math">
<p><span class="math">.cleanlinessFactor.use = 100 \times \frac{.heatTransferCoefficient.use}{.heatTransferCoefficient.design}</span></p>
</div><p><strong>Cooling Water Range</strong></p>
<p>The cooling water range is the temperature rise in the condenser cooling water
and is defined as:</p>
<div class="math">
<p><span class="math">T_{r} = T_{out} - T_{in}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">T_{r}</span> = Cooling water range <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{out}</span> = Condenser cooling water outlet temperature <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{in}</span> = Condenser cooling water inlet temperature <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">cond.c2.dT.use = c2out.prop.temp.use - cond.c2in.prop.temp.use</span></p>
</div><p><strong>Condenser Sub Cooling</strong></p>
<p>Condenser sub-cooling is the difference between the saturated steam temperature
of the condenser back-pressure and the temperature of the hotwell.  It is an
indication of too much cooling in the condenser defined as:</p>
<div class="math">
<p><span class="math">T_{s} = T_{sat} - T_{hw}</span></p>
</div><p>Where:</p>
<ul class="simple">
<li><span class="math">T_{s}</span> = Sub cooling temperature <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{sat}</span> = Saturation steam temperature at condenser back pressure <span class="math">(^{o}C)</span></li>
<li><span class="math">T_{hw}</span> = Hotwell temperature <span class="math">(^{o}C)</span></li>
</ul>
<p>In CAS terms:</p>
<div class="math">
<p><span class="math">cond.subCooling.use = cond.c1in.prop.satTemp.use - cond.c1out.prop.temp.use</span></p>
</div></div>
