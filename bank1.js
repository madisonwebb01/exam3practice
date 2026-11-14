/* Module 5 — Cell Signaling
   Source: BIOL 8420 Module 5 Practice Quiz (39 questions, instructor-highlighted answers)
   opts format: [text, isCorrect, whyLine] */
window.BANK_M1 = [

{n:1, topic:"FRET and the toxins", sec:"\u00a714, \u00a724", stem:"You have isolated a new species of infectious bacteria.  The bacterium releases a toxin that you believe is adversely affecting heterotrimeric Gs (stimulatory)-protein-based signaling. To explore this hypothesis you use an epithelial cell line that is expressing a cyan fluorescent protein (CFP)-labeled \u03b1 subunit and a yellow fluorescent protein (YFP)-labeled \u03b2 subunit of a heterotrimeric Gs-protein.  CFP emits blue light and has excitation and emission wavelengths of 440 nm and 490 nm, respectively.  YFP emits yellow light and has excitation and emission wavelengths of 490 nm and 527 nm, respectively.  To test your hypothesis, you perform two experiments. First, you apply a signaling ligand known to activate this Gs protein and track yellow fluorescence (Fig. A). Second, you apply the signaling ligand and the purified bacterial toxin simultaneously and track yellow fluorescence (Fig. B). Which of the following conclusion will you draw based on the above experimental data?", opts:[
  ["Application of the ligand and bacterial toxin will likely inhibit Adenylyl cyclase",0,"Inhibiting the cyclase is the opposite of a permanently active Gs\u03b1."],
  ["Application of the ligand and bacterial toxin will likely cause cAMP levels to increase",1,"Read the axis: this is yellow (527 nm) fluorescence, so a fall means \u03b1 has separated from \u03b2\u03b3. In Fig. A the trace drops when ligand is added and then recovers \u2014 normal cycling, GTP is hydrolysed and \u03b1\u03b2\u03b3 reassemble. In Fig. B, with toxin, it drops and never recovers: \u03b1 stays dissociated and active, so adenylyl cyclase runs continuously and cAMP rises."],
  ["Application of the ligand and bacterial toxin will likely activate Protein kinase C",0,"PKC belongs to the Gq/PLC/DAG arm \u2014 nothing in this experiment touches it."],
  ["Application of the ligand and bacterial toxin will likely cause cAMP levels to decrease",0,"A cAMP fall would require Gs\u03b1 to be locked off, which would show as a flat yellow trace, not a drop."],
], fig:"fret-gs.png", figcap:"Fig. A: signaling ligand alone \u2014 yellow fluorescence falls, then recovers. Fig. B: ligand plus the bacterial toxin \u2014 yellow falls and never recovers."},

{n:2, topic:"Calcium and calmodulin", sec:"\u00a729", stem:"Calmodulin:", opts:[
  ["Group of answer choices",0,"\u201cGroup of answer choices\u201d is a copy-paste artifact from Canvas, not a real option \u2014 ignore it."],
  ["binds Ca2+ in a cooperative fashion",0,"These options are each individually true but incomplete \u2014 the bank wants the full definition."],
  ["is a ubiquitous protein in eukaryotic cells that binds Ca2+ in a cooperative fashion",1,"Calmodulin is a ubiquitous eukaryotic Ca\u00b2\u207a-binding protein and it binds Ca\u00b2\u207a cooperatively. Option c is the only one that states both halves."],
  ["is a ubiquitous protein in eukaryotic cells",0,"These options are each individually true but incomplete \u2014 the bank wants the full definition."],
  ["is a membrane-bound protein",0,"This option is false: calmodulin is cytosolic, one of the mechanisms that mops up free Ca\u00b2\u207a so it cannot signal."],
], note:"Option (a), \u201cGroup of answer choices\u201d, is a copy-paste artifact from Canvas and is not a real choice. Options (b) and (d) are each half of the correct answer; (c) states both halves."},

{n:3, topic:"FRET and the toxins", sec:"\u00a714", stem:"You have isolated a new species of infectious bacteria.  The bacterium releases a toxin that you believe is adversely affecting heterotrimeric Gs (stimulatory)-protein-based signaling. To explore this hypothesis you use an epithelial cell line that is expressing a cyan fluorescent protein (CFP)-labeled \u03b1 subunit and a yellow fluorescent protein (YFP)-labeled \u03b2 subunit of a heterotrimeric Gs-protein.  CFP emits blue light and has excitation and emission wavelengths of 440 nm and 490 nm, respectively.  YFP emits yellow light and has excitation and emission wavelengths of 490 nm and 527 nm, respectively.  To test your hypothesis, you perform two experiments. First, you apply a signaling ligand known to activate this Gs protein and track yellow fluorescence (Fig. A). Second, you apply the signaling ligand and the purified bacterial toxin simultaneously and track yellow fluorescence (Fig. B). Which of the following conclusion will you draw based on the above experimental data?", opts:[
  ["The toxin locks the \u03b1 subunit in the \u201coff\u201d state.",0,"If \u03b1 were locked \u201coff\u201d it would never dissociate, and the yellow trace would be a flat line at maximum."],
  ["The toxin has no effect on heterotrimeric G-protein signaling.",0,"There is plainly an effect \u2014 Fig. B never recovers."],
  ["The toxin locks the \u03b1 subunit in the \u201con\u201d state.",1,"Same two figures as Q1, asking for the mechanism rather than the consequence. Yellow falls and stays low, so \u03b1 is permanently separated from \u03b2\u03b3 \u2014 the toxin locks the \u03b1 subunit in the \u201con\u201d state, exactly as cholera toxin does by preventing GTP hydrolysis."],
  ["It is impossible to draw conclusions from these data.",0,"The data are perfectly interpretable; the comparison of A and B is the whole design."],
], fig:"fret-gs.png", figcap:"Fig. A: signaling ligand alone \u2014 yellow fluorescence falls, then recovers. Fig. B: ligand plus the bacterial toxin \u2014 yellow falls and never recovers."},

{n:4, topic:"PKA and its outputs", sec:"\u00a718", stem:"The following happens downstream of signaling by PKA EXCEPT:", opts:[
  ["activation of adenylyl cyclase",1,"Adenylyl cyclase is upstream of PKA, not downstream \u2014 it makes the cAMP that activates PKA in the first place. A signal cannot be its own output."],
  ["glycogen breakdown in muscle cells",0,"This IS downstream of PKA: PKA activates phosphorylase kinase, which activates glycogen phosphorylase, giving glucose-1-phosphate."],
  ["movement of chloride ions through CFTR channels",0,"This IS downstream of PKA: PKA phosphorylates the CFTR R domain, which lets NBD1 and NBD2 bind ATP and opens the channel."],
  ["changes in gene expression",0,"This IS downstream of PKA: the catalytic subunits enter the nucleus and phosphorylate CREB."],
  ["movement of water across epithelia",0,"This IS downstream of PKA: water follows the chloride that CFTR releases."],
]},

{n:5, topic:"G protein mechanics", sec:"\u00a710, \u00a713", stem:"Which of the following mutations in the G\u03b1 (alpha) subunit could render a Gs-protein-coupled receptor signaling pathway constitutively INACTIVE?", opts:[
  ["If a mutation in the G\u03b1 the subunit of the Gs-protein constitutively turn on adenylyl cyclase",0,"These options both describe a constitutively active pathway \u2014 the opposite of what is asked."],
  ["If G\u03b1 subunit of the Gs-protein cannot bind to GTP by replacing the GDP",1,"Constitutively inactive means the switch can never be thrown on. G\u03b1 turns on by exchanging GDP for GTP, so a mutant that cannot bind GTP is permanently off."],
  ["If G\u03b1 subunit produce a lot of cAMP due to the mutation",0,"These options both describe a constitutively active pathway \u2014 the opposite of what is asked."],
  ["All of the other answer choices are correct",0,"This option fails because a and c are wrong."],
]},

{n:6, topic:"Cholera and pertussis", sec:"\u00a724", stem:"Cholera toxin can make you sick through overactivation of a Gs\u03b1 pathway even if your body stops making the ligand associated with activation of the pathway. Knowing this, which statement CANNOT be true about cholera toxin?", opts:[
  ["It chemically modi\ufb01es the Gs\u03b1 protein",0,"These options are all true and are in fact the mechanism: it modifies Gs\u03b1, prevents GTP hydrolysis, and so keeps adenylyl cyclase continuously active."],
  ["It leads to continuous activation of adenylyl cyclase",0,"These options are all true and are in fact the mechanism: it modifies Gs\u03b1, prevents GTP hydrolysis, and so keeps adenylyl cyclase continuously active."],
  ["Cholera toxin activates a ligand-activated G protein-coupled receptor",1,"The stem gives you the logic: cholera toxin works even with no ligand being made. That is only possible if it bypasses the receptor entirely, which it does \u2014 it chemically modifies Gs\u03b1 directly. So the one statement that cannot be true is that it works through a ligand-activated GPCR."],
  ["It prevents hydrolysis of bound GTP to GDP",0,"These options are all true and are in fact the mechanism: it modifies Gs\u03b1, prevents GTP hydrolysis, and so keeps adenylyl cyclase continuously active."],
], note:"Q6 and Q38 are the same fact in different wording \u2014 cholera toxin is not a receptor. A fact that appears twice in the bank is worth treating as likely to appear on the exam."},

{n:7, topic:"PLC, IP3 and DAG", sec:"\u00a727", stem:"1,2-diacylglycerol (DAG) and inositol 1,4,5-trisphosphate (IP3) are cleaved from phosphatidylinositol 4,5- bisphosphate (PIP2) by the enzyme:", opts:[
  ["adenylyl cyclase",0,"Adenylyl cyclase makes cAMP from ATP."],
  ["phospholipase C",1,"Phospholipase C is the enzyme that cleaves PIP\u2082 into DAG and IP\u2083. It is the effector activated by Gq."],
  ["Phosphodiesterase",0,"Phosphodiesterase degrades cAMP to 5\u2032-AMP."],
  ["protein kinase C",0,"PKC is downstream \u2014 it is activated by DAG, it does not produce it."],
]},

{n:8, topic:"PKA and its outputs", sec:"\u00a716, \u00a720", stem:"When the regulatory domain of PKA is bound to cAMP:", opts:[
  ["Histone deacetylases tighten up DNA around histones promoting transcription",0,"Histone deacetylases tighten chromatin and repress transcription; this pathway recruits CBP/p300, which are acetyltransferases that loosen it."],
  ["the released catalytic subunit travels to the nucleus where it can phosphorylate CREB",1,"cAMP binds the regulatory subunits of the PKA heterotetramer, which releases the catalytic subunits. Those travel into the nucleus and phosphorylate CREB, turning it into an active transcription factor."],
  ["the P300 phosphorylates CREB",0,"p300 is recruited by phospho-CREB \u2014 it does not phosphorylate CREB."],
  ["the catalytic subunit acts on CRE to stimulate gene transcription",0,"This option Mixes up protein and DNA: CRE is the DNA element, CREB is the protein. The catalytic subunit phosphorylates the protein."],
]},

{n:9, topic:"RTK, Ras and MAPK", sec:"\u00a734", stem:"Ras is a(n):", opts:[
  ["guanine nucleotide exchange factor",0,"The GEF in this pathway is Sos."],
  ["Kinase",0,"The kinases are Raf, MEK and MAP kinase."],
  ["Protease",0,"Nothing here is a protease."],
  ["adapter protein",0,"The adapter protein is GRB2."],
  ["None of the answers is correct",1,"Ras is a monomeric G protein (a small GTPase). None of the four categories offered fits, so the answer is none of the above."],
]},

{n:10, topic:"PKA and its outputs", sec:"\u00a720", stem:"All genes regulated by PKA (Protein Kinase A) contain a cis-acting DNA sequence that binds to the phosphorylated form of a transcription factor called:", opts:[
  ["c-Jun",0,"c-Jun and \u03b2-catenin belong to other pathways."],
  ["\u0392-catenin",0,"c-Jun and \u03b2-catenin belong to other pathways."],
  ["TCF",0,"TCF (= Elk-1) is real and does appear in this module \u2014 but it binds the SRE in the Ras/MAPK pathway, not the CRE. That is the trap: both are transcription factors from Module 5, acting at different elements."],
  ["CREB",1,"Genes regulated by PKA all carry a CRE (cAMP response element), and the transcription factor that binds it in its phosphorylated form is CREB."],
]},

{n:11, topic:"PLC, IP3 and DAG", sec:"\u00a730", stem:"DAG activates:", opts:[
  ["PKA",0,"PKA is activated by cAMP."],
  ["PLC",0,"PLC is upstream \u2014 it produces DAG."],
  ["PKC",1,"DAG activates protein kinase C \u2014 by serving as the membrane docking site PKC must bind before it can work."],
  ["calmodulin",0,"Calmodulin binds Ca\u00b2\u207a; it is not a DAG target."],
]},

{n:12, topic:"PLC, IP3 and DAG", sec:"\u00a728", stem:"A PIP2 molecule has ________ phosphates where was an IP3 molecule has ___________ phosphates.", opts:[
  ["2, 3",0,"These options all come from reading \u201cbis\u201d as the total phosphate count. The instructor pre-announced this exact question and said the common wrong answer is \u201cIP\u2083 three, PIP\u2082 two.\u201d"],
  ["3, 2",0,"These options all come from reading \u201cbis\u201d as the total phosphate count. The instructor pre-announced this exact question and said the common wrong answer is \u201cIP\u2083 three, PIP\u2082 two.\u201d"],
  ["2, 2",0,"These options all come from reading \u201cbis\u201d as the total phosphate count. The instructor pre-announced this exact question and said the common wrong answer is \u201cIP\u2083 three, PIP\u2082 two.\u201d"],
  ["3, 3",1,"Both have three. PIP\u2082 is named for the two phosphates that were added (positions 4 and 5), but phosphatidylinositol already carried one at position 1. PLC cleaves the head group off whole, so all three phosphates leave on the IP\u2083."],
]},

{n:13, topic:"RTK, Ras and MAPK", sec:"\u00a736", stem:"Transcriptional activation downstream of the MAPK pathway involves:", opts:[
  ["recruitment of Raf's N-terminal regulatory domain",0,"Raf's regulatory domain is engaged by Ras-GTP \u2014 that is pathway activation, several steps upstream of transcription."],
  ["binding of transcription factors to the SRE of c-Fos",1,"Transcriptional activation at the end of the MAPK pathway happens when TCF/Elk-1 and SRF bind the SRE (serum response element) of c-fos."],
  ["MEK",0,"MEK is an intermediate kinase."],
  ["CREB phosphorylation",0,"CREB phosphorylation is the PKA/cAMP route, not MAPK."],
  ["Ras activation upon Sos binding",0,"Ras activation by Sos is the start of the cascade, not the transcriptional step."],
]},

{n:14, topic:"RTK, Ras and MAPK", sec:"\u00a735", stem:"Which statement is NOT true about the role of adapter proteins in the activation of Ras by receptor tyrosine kinases?", opts:[
  ["GRB2 interacts with Sos via its SH3 domain",0,"These options are all accurate: GRB2 uses SH3 to grip Sos's proline-rich sequences, GRB2 and Sos couple the receptor to inactive Ras\u00b7GDP, and they are recruited after receptor dimerization and autophosphorylation."],
  ["GRB2 and Sos proteins couple the receptor to the inactive Ras\u00b7GDP complex",0,"These options are all accurate: GRB2 uses SH3 to grip Sos's proline-rich sequences, GRB2 and Sos couple the receptor to inactive Ras\u00b7GDP, and they are recruited after receptor dimerization and autophosphorylation."],
  ["Following dimerization and autophosphorylation of receptor tyrosine kinases, GRB2 and Sos proteins couple to the receptor",0,"These options are all accurate: GRB2 uses SH3 to grip Sos's proline-rich sequences, GRB2 and Sos couple the receptor to inactive Ras\u00b7GDP, and they are recruited after receptor dimerization and autophosphorylation."],
  ["Sos acts as a GAP, which helps convert Ras\u00b7GDP to active Ras\u00b7GTP",1,"Sos is a GEF, not a GAP. A GEF swaps GDP for GTP and turns Ras on; a GAP would accelerate hydrolysis and turn it off. The statement is self-contradictory \u2014 it describes a GAP doing a GEF's job."],
]},

{n:15, topic:"Forms of signaling", sec:"\u00a73", stem:"In paracrine signaling, the signaling molecule:", opts:[
  ["is carried to the target cells via the circulation",0,"Travelling via the circulation is endocrine."],
  ["acts on the same cells that secreted the signaling molecule",0,"Acting on the secreting cell itself is autocrine."],
  ["acts on target cells far away from the secreting cell",0,"Acting far away is endocrine or synaptic."],
  ["acts on cells in close proximity to the secreting cell",1,"Paracrine = short range. A local mediator is secreted and acts on cells in close proximity."],
]},

{n:16, topic:"PKA and its outputs", sec:"\u00a719", stem:"Which of the following events occur during the adrenaline/epinephrin-stimulated conversion of glycogen to glucse-1- phosphate?", opts:[
  ["activation of glycogen phosphorylase",0,"True, and part of the chain \u2014 phosphorylase kinase activates it. But it is only one step, so the complete answer is all of them."],
  ["activation of PKA by cAMP",0,"True \u2014 the step that starts the cascade. Still only one step of three."],
  ["All of the answer choices are correct.",1,"All three are genuine steps in the adrenaline cascade, in this order: cAMP activates PKA \u2192 PKA activates phosphorylase kinase \u2192 phosphorylase kinase activates glycogen phosphorylase \u2192 glucose-1-phosphate."],
  ["activation of phosphorylase kinase",0,"True \u2014 PKA's direct target. Still only one step of three."],
]},

{n:17, topic:"Gs, Gi and adenylyl cyclase", sec:"\u00a715", stem:"Muscarinic acetylcholine receptors are GPCRs that slow the rate of heart muscle contraction upon ligand binding/activation. Activation of this receptor leads to opening of potassium channels triggered by decreases in cAMP levels. The muscarinic acetylcholine receptor likely couples to:", opts:[
  ["Gq\u03b1",0,"Gq\u03b1 activates PLC and would raise IP\u2083/DAG/Ca\u00b2\u207a, not lower cAMP."],
  ["Gs\u03b1",0,"Gs\u03b1 would raise cAMP."],
  ["Gi\u03b1",1,"The stem tells you the outcome is decreased cAMP. Only an inhibitory G protein does that, so the receptor couples to Gi\u03b1. This is the heart-rate-slowing acetylcholine receptor from slide 6."],
  ["Go\u03b1",0,"Go\u03b1 is not the cAMP-lowering G protein described here."],
]},

{n:18, topic:"RTK, Ras and MAPK", sec:"\u00a736", stem:"Serum response factor (SRF) is phosphorylated by:", opts:[
  ["MEK",0,"MEK phosphorylates MAP kinase."],
  ["Raf",0,"Raf phosphorylates MEK."],
  ["p90RSK",1,"SRF is phosphorylated by p90RSK (p90 ribosomal S6 kinase), which is itself phosphorylated by MAP kinase and then enters the nucleus."],
  ["Ras",0,"Ras is a GTPase, not a kinase."],
  ["MAP kinase",0,"MAP kinase is the trap \u2014 it phosphorylates TCF/Elk-1, the other half of the ternary complex, not SRF."],
]},

{n:19, topic:"PLC, IP3 and DAG", sec:"\u00a727, \u00a728", stem:"A mutation renders a Gq\u03b1 subunit constitutively active (also known as dominant active). Which of the following effects might you observe in a cell with this mutation?", opts:[
  ["beta/gamma subunits are less active",0,"Nothing suggests \u03b2\u03b3 becomes less active."],
  ["IP3 is sequestered at the membrane",0,"IP\u2083 is the soluble product \u2014 it leaves the membrane; DAG is the one that stays."],
  ["PIP2 levels in the cell membrane diminish",1,"A constitutively active Gq\u03b1 keeps phospholipase C switched on, and PLC consumes PIP\u2082. Run it continuously and the membrane's PIP\u2082 levels fall."],
  ["PKC activity decreases",0,"PKC activity would increase, since both DAG and Ca\u00b2\u207a rise."],
]},

{n:20, topic:"RTK, Ras and MAPK", sec:"\u00a738", stem:"How can multiple MAP kinase pathways be segregated when they share a common component, like a downstream kinase?", opts:[
  ["differential activation of activation lip (loops in proteins) tyrosines",0,"Activation-lip tyrosines are an RTK activation feature, not a sorting mechanism."],
  ["formation of pathway-speci\ufb01c complexes assembled on molecular scaffolds",1,"Parallel MAPK pathways that share a kinase are kept apart by pathway-specific complexes assembled on molecular scaffolds \u2014 the scaffold physically hands the shared kinase only to its own partners."],
  ["activation of different small G proteins",0,"Using different small G proteins does not solve the problem of a shared downstream kinase."],
  ["phosphorylation of PTB (phosphotyrosine binding domain)-containing proteins",0,"PTB-domain phosphorylation is a docking mechanism, not pathway segregation."],
]},

{n:21, topic:"RTK, Ras and MAPK", sec:"\u00a735", stem:"An SH2-containing protein contains a mutation that changes its binding pocket such that tyrosine and phosphotyrosine bind with equal af\ufb01nity. As a result, MEK activity:", opts:[
  ["increases with ligand binding-induced dimerization",0,"The whole point is that dimerization stops making a difference."],
  ["decreases due to allosteric inhibition of SH2-domain binding",0,"No allosteric inhibition is described."],
  ["decreases due to changes in Raf activation",0,"Raf activation is a step further down; the question asks about the response to dimerization, which is now flat."],
  ["does not change with receptor dimerization and transautophosphorylation",1,"GRB2's SH2 domain normally binds only phosphotyrosine, which is why nothing is recruited until the receptor autophosphorylates. If the pocket binds tyrosine and phosphotyrosine equally, recruitment no longer depends on receptor phosphorylation \u2014 so MEK activity does not change when the receptor dimerizes and trans-autophosphorylates."],
]},

{n:22, topic:"Second messengers", sec:"Master organizer 2", stem:"Which of the following is NOT a common intracellular second messenger?", opts:[
  ["1,2 diacylglycerol (DAG)",0,"DAG, IP\u2083 and cGMP are all genuine second messengers. cGMP is the easy one to doubt because the receptor guanylyl cyclases were skipped in lecture \u2014 but he star-marked and underlined it for exactly this reason."],
  ["inositol 1,4,5-trisphosphate (IP3)",0,"DAG, IP\u2083 and cGMP are all genuine second messengers. cGMP is the easy one to doubt because the receptor guanylyl cyclases were skipped in lecture \u2014 but he star-marked and underlined it for exactly this reason."],
  ["3'\u20135' cyclic guanine monophosphate (cGMP)",0,"DAG, IP\u2083 and cGMP are all genuine second messengers. cGMP is the easy one to doubt because the receptor guanylyl cyclases were skipped in lecture \u2014 but he star-marked and underlined it for exactly this reason."],
  ["adenosine triphosphate (ATP)",1,"ATP is not a second messenger \u2014 it is the substrate adenylyl cyclase converts into cAMP, and the cell's energy currency."],
]},

{n:23, topic:"G protein mechanics", sec:"\u00a77", stem:"GTPases serve in many signal transduction pathways and the presence of GTP or GDP dictates whether the pathway is on or off, respectively. Which of the following statements is TRUE regarding guanine nucleotide exchange factors (GEF) and the role in these signaling pathways?", opts:[
  ["None of the answers is correct",0,"This option fails because d is correct."],
  ["They hydrolyze GTP into GDP and Pi",0,"Hydrolysing GTP to GDP + Pi is the intrinsic GTPase (accelerated by a GAP) \u2014 the off step."],
  ["They decrease the GTPase activity of the G-protein",0,"A GAP increases GTPase activity; a GEF does not decrease it."],
  ["They catalyze the dissociation of GDP on the G-protein and promote the replacement of GTP",1,"A GEF catalyses the dissociation of GDP from the G protein and promotes its replacement by GTP \u2014 that is the definition, and it is the on step."],
]},

{n:24, topic:"G protein mechanics", sec:"\u00a713", stem:"Which type of experimental evidence shows that the intrinsic GTPase activity of the G\u03b1 subunit is important for terminating effector activation?", opts:[
  ["A dominant-active (constant activity) GEF causes stimulation of the effector protein for longer upon ligand-induced activation of the receptor.",0,"These options manipulate the GEF, which tests the exchange step, not the hydrolysis step."],
  ["A dominant-negative (no activity) GEF causes stimulation of the effector protein for longer upon ligand- induced activation of the receptor.",0,"These options manipulate the GEF, which tests the exchange step, not the hydrolysis step."],
  ["A nonhydrolyzable GTP analog causes displacement of GDP with the modi\ufb01ed GTP resulting in continuous activation of the receptor because the bound GTP analog cannot be hydrolyzed to GDP.",0,"This option is the near-miss and the real trap: it describes the same reagent but says it causes continuous activation of the receptor. The receptor is not what stays on \u2014 G\u03b1 and its effector are."],
  ["A nonhydrolyzable GTP analog that can bind to the G\u03b1 subunit but cannot be hydrolyzed by the intrinsic GTPase, thereby activating the effector protein longer upon ligand-induced activation of the receptor.",1,"To show that the intrinsic GTPase matters, you have to block hydrolysis specifically. A non-hydrolysable GTP analog that binds G\u03b1 but cannot be hydrolysed does exactly that, and the effector then stays activated longer."],
]},

{n:25, topic:"RTK, Ras and MAPK", sec:"\u00a733, \u00a735", stem:"Binding of hormone to a receptor tyrosine kinase causes all of the following EXCEPT:", opts:[
  ["activation of Ras through an interaction with GRB2 and Sos",0,"These options all follow directly from ligand binding: dimerization, trans-autophosphorylation, then GRB2/Sos recruitment and Ras activation."],
  ["dimerization of the receptor",0,"These options all follow directly from ligand binding: dimerization, trans-autophosphorylation, then GRB2/Sos recruitment and Ras activation."],
  ["autophosphorylation of the receptor",0,"These options all follow directly from ligand binding: dimerization, trans-autophosphorylation, then GRB2/Sos recruitment and Ras activation."],
  ["hydrolysis of GTP bound to Ras",1,"Ligand binding to an RTK activates Ras \u2014 GDP is replaced by GTP. Hydrolysis of Ras-bound GTP is the off step, carried out later by the intrinsic GTPase with a GAP, so it is not caused by hormone binding."],
]},

{n:26, topic:"PLC, IP3 and DAG", sec:"\u00a727", stem:"Phospholipase C is activated by:", opts:[
  ["Gq\u03b1",1,"Gq\u03b1 is the G protein that activates phospholipase C."],
  ["Gs\u03b1",0,"Gs\u03b1 activates adenylyl cyclase."],
  ["None of the answers is correct.",0,"There is a correct answer: Gq\u03b1 activates phospholipase C."],
  ["Gi\u03b1",0,"Gi\u03b1 inhibits adenylyl cyclase. Neither touches PLC."],
]},

{n:27, topic:"Second messengers", sec:"\u00a717", stem:"Signal ampli\ufb01cation is an important part of GPCR-mediated signaling. Which step does NOT directly amplify the signal?", opts:[
  ["effector activation",0,"One G\u03b1 activates an effector that works catalytically."],
  ["kinase acting on substrates",0,"One kinase phosphorylates many substrate molecules. All three multiply the signal."],
  ["binding of second messenger to target protein/ion channel",1,"Amplification means one molecule generating many. A second messenger binding its target protein or ion channel is one-to-one \u2014 no gain at that step."],
  ["second messenger generation",0,"One activated cyclase makes thousands of cAMP."],
]},

{n:28, topic:"PLC, IP3 and DAG", sec:"\u00a728", stem:"Phosphatidylinositol 4,5-bisphosphate (PIP2) is cleaved by phospholipase C into:", opts:[
  ["inositol 1,4,5-trisphosphate (IP3)",0,"These options each name only one of the two products."],
  ["phosphatidylinositol (PI)",0,"PI is the precursor of PIP\u2082, not a cleavage product."],
  ["1,2-diacylglycerol (DAG)",0,"These options each name only one of the two products."],
  ["1,2-diacylglycerol (DAG) and inositol 1,4,5-trisphosphate (IP3)",1,"PLC cleaves PIP\u2082 into both products at once: DAG, which stays in the membrane, and IP\u2083, which is soluble and diffuses to the ER."],
]},

{n:29, topic:"RTK, Ras and MAPK", sec:"\u00a735", stem:"Which protein stabilizes an intermediate and facilitates GTP exchange with GDP in the membrane-bound Ras protein, in the RTK (Receptor tyrosine kinase) signaling cascade?", opts:[
  ["Raf",0,"Raf is the downstream effector that Ras-GTP activates."],
  ["Sos",1,"Sos is the GEF: it stabilises a nucleotide-free intermediate of Ras and facilitates the exchange of GDP for GTP."],
  ["GRB2",0,"GRB2 is the adapter that recruits Sos \u2014 it has no exchange activity of its own."],
  ["RTK",0,"The RTK phosphorylates itself, not Ras."],
]},

{n:30, topic:"RTK, Ras and MAPK", sec:"\u00a734", stem:"Which statement explains why Ras is activated quickly by RTKs?", opts:[
  ["Ras changes conformation upon ligand binding to prepare for activation",0,"Ras does not bind the ligand."],
  ["Ras binds phosphotyrosine residues on RTKs",0,"It is GRB2's SH2 domain that binds phosphotyrosine, not Ras."],
  ["Ras is maintained at the plasma membrane through a lipid-mediated attachment",1,"Ras is already tethered to the plasma membrane by a lipid-mediated attachment, so when the RTK is activated the two are immediately adjacent \u2014 no recruitment delay."],
  ["RTKs phosphorylate Ras",0,"RTKs do not phosphorylate Ras \u2014 Ras is switched on by nucleotide exchange, not phosphorylation."],
]},

{n:31, topic:"RTK, Ras and MAPK", sec:"\u00a735", stem:"Which of the following statements about receptor tyrosine kinase signaling is FALSE?", opts:[
  ["SH3 domains, such as those on GRB2, bind to proline-rich sequences in downstream signaling molecules.",0,"These options are all true: SH3 binds proline-rich sequences, SH2 binds the phosphorylated receptor, and Sos is a Ras GEF."],
  ["The GRB2 adaptor protein associates with RTKs via its SH2 domain.",0,"These options are all true: SH3 binds proline-rich sequences, SH2 binds the phosphorylated receptor, and Sos is a Ras GEF."],
  ["Sos activates the Ras/MAPK signaling cascade by acting as a GEF for Ras.",0,"These options are all true: SH3 binds proline-rich sequences, SH2 binds the phosphorylated receptor, and Sos is a Ras GEF."],
  ["The GRB2 adaptor protein binds sequentially and mutually exclusively to the RTK and Sos.",1,"GRB2 is an adapter: it binds the RTK and Sos at the same time, through two different domains (SH2 and SH3). Binding them \u201csequentially and mutually exclusively\u201d would defeat the purpose \u2014 it could never bridge them."],
]},

{n:32, topic:"Gs, Gi and adenylyl cyclase", sec:"\u00a715", stem:"Which statement about adenylyl cyclase stimulation/inhibition in adipose cells is TRUE?", opts:[
  ["Glucagon inhibits adenylyl cyclase",0,"These options both claim glucagon inhibits the cyclase; glucagon stimulates it."],
  ["Prostaglandin E1 stimulates adenylyl cyclase",0,"Prostaglandin E1 is on the inhibitory list, so it inhibits rather than stimulates. Option (d) is designed to look complete \u2014 but it is half right and half wrong, which makes it wrong."],
  ["Epinephrine stimulates adenylyl cyclase",1,"Epinephrine stimulates adenylyl cyclase \u2014 it is on the Gs list along with glucagon and ACTH."],
  ["Glucagon inhibits adenylyl cyclase and epinephrine stimulates adenylyl cyclase",0,"These options both claim glucagon inhibits the cyclase; glucagon stimulates it."],
]},

{n:33, topic:"G protein mechanics", sec:"\u00a710", stem:"Of the components of a heterotrimeric G protein, which subunit is able to activate downstream responses?", opts:[
  ["the \u03b3 subunits",0,"\u03b2 and \u03b3 stay together as a unit and do signal downstream, but naming \u03b3 alone is incomplete."],
  ["the \u03b1 subunit",0,"The \u03b1 subunit does activate downstream effectors \u2014 but \u03b2\u03b3 does too once released. Answering \u03b1 from the lecture alone is exactly the trap the instructor warned about for this question."],
  ["the \u03b2 subunits",0,"\u03b2\u03b3 does signal downstream, but it acts as a \u03b2\u03b3 unit and naming \u03b2 alone is incomplete."],
  ["All of the other answer choices are correct",1,"All of them. The \u03b1 subunit is the one lecture follows, but the textbook is explicit that \u03b2\u03b3 also activates downstream signaling once it separates from \u03b1."],
]},

{n:34, topic:"Desensitization", sec:"\u00a739", stem:"Which of the following mechanisms can terminate an intracellular signaling pathway once the concentration of an external signal decreases?", opts:[
  ["deactivation of a signal transduction protein",0,"True \u2014 one of the three termination routes (phosphatases, GTP hydrolysis). But not the only one."],
  ["degradation of the second messenger",0,"True \u2014 phosphodiesterase degrades cAMP. But not the only route."],
  ["desensitization of receptors",0,"True \u2014 receptor down-regulation, PKA feedback, BARK/\u03b2-arrestin. But not the only route."],
  ["All of the answer choices are correct.",1,"All three terminate signaling once the external signal falls: deactivating a transduction protein (phosphatases, GTP hydrolysis), degrading the second messenger (phosphodiesterase on cAMP), and desensitizing receptors (down-regulation, PKA feedback, BARK/\u03b2-arrestin)."],
]},

{n:35, topic:"RTK, Ras and MAPK", sec:"\u00a733", stem:"Before ligand binding, receptor tyrosine kinases:", opts:[
  ["have excellent tyrosine kinase activity",0,"Kinase activity is poor, not excellent, until trans-autophosphorylation."],
  ["contain activation lip (loop in proteins) tyrosines within the kinase active site",1,"Before ligand binds, an RTK is a monomer whose activation lip (loop) lies inside the kinase active site, physically blocking it. That is why basal kinase activity is poor."],
  ["bind to GRB2 within the cytosolic domains",0,"These options both require phosphotyrosines, which do not exist until after dimerization \u2014 so neither GRB2 binding nor SH2 docking sites are present yet."],
  ["contain binding sites for SH2-domain-containing proteins",0,"These options both require phosphotyrosines, which do not exist until after dimerization \u2014 so neither GRB2 binding nor SH2 docking sites are present yet."],
]},

{n:36, topic:"PLC, IP3 and DAG", sec:"\u00a730", stem:"Diacylglycerol (DAG) formation aids in cell signaling by acting as a:", opts:[
  ["speci\ufb01c docking site to activate a downstream kinase",1,"DAG works as a specific docking site in the membrane that PKC must bind in order to become active. It is a location signal, not a reactant."],
  ["None of the answers is correct",0,"This option fails because a is correct."],
  ["soluble second messenger that can directly activate kinases near the nucleus",0,"This option is the key distractor: DAG keeps its two fatty-acid tails, so it is not soluble and cannot drift to the nucleus."],
  ["substrate for PKC",0,"PKC's substrates are other proteins \u2014 DAG is not consumed."],
]},

{n:37, topic:"RTK, Ras and MAPK", sec:"\u00a736", stem:"The order of events in a signaling pathway can be determined by the analysis of mutants. Cells that express a mutant defective Raf protein cannot be stimulated to proliferate uncontrollably by constitutively active RasD (dominant active). This indicates:", opts:[
  ["Raf is upstream of Ras in the signaling pathway.",0,"This option is the reversed reading."],
  ["Ras mutants are recessive to Raf mutants.",0,"Dominance is not what this experiment tests."],
  ["All of the answer choices are correct",0,"This option fails because only d is correct."],
  ["Ras is upstream of Raf in the signaling pathway.",1,"A constitutively active Ras cannot drive proliferation when Raf is broken. If removing the downstream component blocks the effect of an always-on upstream component, then Ras is upstream of Raf."],
]},

{n:38, topic:"Cholera and pertussis", sec:"\u00a724", stem:"All the following statements about cholera toxin are true EXCEPT:", opts:[
  ["It leads to continuous activation of adenylyl cyclase.",0,"These options are the true mechanism. This is a near-duplicate of Q6 \u2014 same fact, different wording. Appearing twice in the bank is a strong signal it will appear on the exam."],
  ["It prevents hydrolysis of bound GTP to GDP.",0,"These options are the true mechanism. This is a near-duplicate of Q6 \u2014 same fact, different wording. Appearing twice in the bank is a strong signal it will appear on the exam."],
  ["It is a G protein-coupled receptor.",1,"Cholera toxin is a bacterial toxin, not a receptor. It acts on Gs\u03b1 directly, which is precisely why it works without any ligand."],
  ["It chemically modi\ufb01es the Gs\u03b1 protein.",0,"These options are the true mechanism. This is a near-duplicate of Q6 \u2014 same fact, different wording. Appearing twice in the bank is a strong signal it will appear on the exam."],
], note:"Near-duplicate of Q6. Same fact, same answer, different phrasing."},

{n:39, topic:"G protein mechanics", sec:"\u00a710", stem:"In heterotrimeric G proteins, GTP binds to the:", opts:[
  ["\ud835\udefc subunit",1,"In a heterotrimeric G protein, GTP binds the \u03b1 subunit. \u03b1 is also the subunit carrying the GTPase activity."],
  ["\ud835\udefe subunit",0,"\u03b2 and \u03b3 associate with \u03b1 but do not bind the nucleotide."],
  ["activated heterodimer",0,"\u03b2\u03b3 is sometimes called a dimer, but it is not where GTP binds. Note the contrast with Q33: GTP binds \u03b1 only, yet \u03b2\u03b3 can still signal downstream once released."],
  ["\ud835\udefd subunit",0,"\u03b2 and \u03b3 associate with \u03b1 but do not bind the nucleotide."],
]},

];
