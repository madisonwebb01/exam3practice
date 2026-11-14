/* Module 6 — The Cell Cycle
   Source: BIOL 8420 Module 6 Practice Quiz (42 questions, instructor-highlighted answers)
   opts format: [text, isCorrect, whyLine] */
window.BANK_M2 = [

{n:1, topic:"Stem cell sources", sec:"\u00a721", stem:"Which of the following statement is NOT true?", opts:[
  ["Embryonic carcinoma cells arise from the embryo during development",1,"Embryonal carcinoma cells do not come from embryos. They arise from tumours of germline cells in the testis or ovary. The name is misleading, and the instructor called this out twice: \u201cvery, very, very wrong \u2026 that's your take-home.\u201d"],
  ["Teratocarcinoma is a malignant tumor",0,"True \u2014 teratocarcinoma is malignant, meaning it can invade beyond the ovary or testis."],
  ["Teratocarcinoma cells can differentiate into different cell types",0,"True \u2014 they retain the ability to differentiate into many cell types."],
  ["Teratoma is a benign tumor",0,"True \u2014 teratoma is the benign form."],
]},

{n:2, topic:"Potency", sec:"Master organizer 5", stem:"Which of the following type/s of embryonic cell/s has/have the ability to grow into a complete mammal in the mother\u2019s uterus from the zygote stage?", opts:[
  ["Totipotent",1,"Only totipotent cells can produce a complete mammal, because a whole animal needs the placenta as well as the body, and the placenta is extra-embryonic."],
  ["Multipotent",0,"These options are more restricted still."],
  ["Unipotent",0,"These options are more restricted still."],
  ["Pluripotent",0,"Pluripotent is the trap: pluripotent cells make all embryonic tissues but not extra-embryonic ones, so no placenta and no live birth."],
  ["Either Pluripotent or Totipotent",0,"This option fails for the same reason."],
]},

{n:3, topic:"Mitotic motors", sec:"Master organizer 2", stem:"Which of the following incorrectly matches a mitotic motor protein with its function?", opts:[
  ["Kinesin-4 interacts with polar microtubules to pull the chromosomes toward the center of the spindle.",0,"Kinesin-4 is a chromokinesin working on the chromosome arms \u2014 the lecture framed it as moving the arms rather than the chromosome as a whole, so the wording is loose, but (b) is unambiguously the reversed one."],
  ["Kinesin-13 enhances microtubule (+) end growth, promoting kinetochore attachment.",1,"Kinesin-13 is a depolymerase \u2014 it shortens microtubules at both the plus and the minus end. Saying it enhances (+) end growth reverses its function. Its real job is to clear the shrinking zone behind dynein so the chromosome has somewhere to move into."],
  ["Kinesin-7 aids in chromosome bi-orientation.",0,"Kinesin-7 is a dual-headed plus-end motor at the kinetochore and does contribute to bi-orientation."],
  ["Kinesin-5 pushes the two asters apart.",0,"Kinesin-5 is the dual-headed motor in the polar-MT overlap zone that pushes the asters apart."],
], note:"Option (a) is loosely worded: kinesin-4 acts on the chromosome arms rather than pulling whole chromosomes along polar microtubules. Option (b) is the unambiguous reversal, since kinesin-13 depolymerises rather than promoting growth."},

{n:4, topic:"Cyclins and ubiquitin ligases", sec:"Master organizer 4, \u00a713", stem:"Which of the following is targeted by the SCF complex?", opts:[
  ["Cyclin B",0,"Cyclin B and securin are targets of the APC/C, not SCF."],
  ["Cdh1",0,"Cdh1 is an activating subunit of the APC, not a target."],
  ["Sic1",1,"SCF targets Sic1, the S-phase cyclin\u2013CDK inhibitor. G1 cyclin\u2013CDK phosphorylates Sic1, SCF ubiquitinates it, the proteasome destroys it, and S-phase CDK is released."],
  ["Securin",0,"Cyclin B and securin are targets of the APC/C, not SCF."],
]},

{n:5, topic:"Stem cell sources", sec:"\u00a719", stem:"Which of the following statements regarding HSC (hematopoietic stem cell) differentiation is false?", opts:[
  ["HSC differentiation initially gives rise to common myeloid and common lymphoid progenitor cells, which are multipotent",0,"True \u2014 the common myeloid and common lymphoid progenitors are both multipotent."],
  ["HSC division and differentiation is controlled by cytokines",0,"True \u2014 cytokines control HSC division and differentiation."],
  ["HSCs generate all types of white blood cells, but not erythrocytes",1,"HSCs do generate erythrocytes. Red blood cells come from the common myeloid progenitor, along with granulocytes, monocytes and megakaryocytes. The statement that they make white cells \u201cbut not erythrocytes\u201d is false."],
  ["HSCs are located in the embryonic liver and in adult bone marrow",0,"True \u2014 embryonic liver and adult bone marrow are the locations."],
]},

{n:6, topic:"Stem cell applications", sec:"\u00a724", stem:"The use of cell-based models to understand or treat human disease processes is aided by stem cells in all the following ways EXCEPT:", opts:[
  ["Provides proof that ES cells are pluripotent and can divide to make a normal animal",1,"Proving that ES cells are pluripotent and can make a normal animal is a demonstration of the biology itself, not a cell-based model of human disease. The question asks which is not a way stem cells aid disease modelling or treatment."],
  ["Growth of neurons in cell culture containing mutations associated with ALS (Amyotrophic lateral sclerosis) for drug screening",0,"These options are all genuine disease applications: ALS-mutant neurons for drug screening, iPSC-derived neurons to replace damaged ones, and patient-specific cells to replace those lost to disease."],
  ["Differentiation of neurons from iPS (induced Pluripotent Stem) cells to replace those damaged by neurodegenerative diseases",0,"These options are all genuine disease applications: ALS-mutant neurons for drug screening, iPSC-derived neurons to replace damaged ones, and patient-specific cells to replace those lost to disease."],
  ["Culture of patient-speci\ufb01c cells to replace those lost to disease, such as for type 2 diabetes",0,"These options are all genuine disease applications: ALS-mutant neurons for drug screening, iPSC-derived neurons to replace damaged ones, and patient-specific cells to replace those lost to disease."],
]},

{n:7, topic:"Cell cycle overview", sec:"\u00a71", stem:"Neurons are amitotic and do not divide (or very rarely divide); but still, we get brain cancers. Based on that information which one of the following is NOT true?", opts:[
  ["Precursor cells of neuron and supporting glial called neuroblastoma can divide uncontrollably causing cancer.",0,"True \u2014 neuroblastoma arises from dividing precursor cells."],
  ["Cancerous cells can metastasize (migrate) from a different cancerous tissue to the brain at a late stage of cancer, but it is not brain cancer.",0,"True \u2014 metastasis to the brain is not brain cancer."],
  ["All of the choices are true",0,"This option fails because (d) is false."],
  ["Mutations in the neurons can turn on the cell cycle and make the neurons divide uncontrollably leading to cancer",1,"Neurons are amitotic \u2014 they do not re-enter the cell cycle. A mutation cannot make a mature neuron divide uncontrollably, so that is the false statement. Brain cancers come from cells that can divide."],
  ["Glial cells (supporting/accessory cells) of the nervous tissue can divide uncontrollably and may lead to cancer.",0,"True \u2014 glial cells divide, and gliomas are the common primary brain cancers."],
]},

{n:8, topic:"Spindle microtubules", sec:"Master organizer 1, \u00a78", stem:"In the mitotic spindle, astral microtubules function to:", opts:[
  ["attach chromosomes to the spindle",0,"Attaching chromosomes is the kinetochore MTs."],
  ["carry out cytokinesis",0,"Cytokinesis is driven by the actin contractile ring in the cleavage furrow, not by microtubules."],
  ["connect the spindle poles",0,"Connecting the poles through the overlap zone is the polar MTs."],
  ["anchor the spindle poles to the plasma membrane",1,"Astral microtubules reach the cell cortex and anchor the spindle poles to the plasma membrane. Dynein anchored there pulls toward the minus end, building the tension that stretches the cell in anaphase B."],
]},

{n:9, topic:"Cyclins and ubiquitin ligases", sec:"Master organizer 4, \u00a711", stem:"Mitotic cyclin levels in early Xenopus embryos are regulated by:", opts:[
  ["phosphorylation",0,"Phosphorylation regulates CDK activity, but cyclin levels are set by synthesis and destruction."],
  ["degradation by MPF",0,"MPF is the cyclin\u2013CDK complex \u2014 it does not degrade its own cyclin."],
  ["synthesis and degradation of their mRNAs",0,"It is the protein that is degraded cyclically, not its mRNA."],
  ["degradation by APC",1,"Mitotic cyclin is degraded by the APC (anaphase-promoting complex), a ubiquitin ligase that marks it for the proteasome."],
]},

{n:10, topic:"Cell cycle overview", sec:"\u00a71", stem:"During which stage of the cell cycle is the chromosome content of a mammalian liver cell 1n/haploid?", opts:[
  ["None of the answers is correct.",1,"A mammalian liver cell is never 1n. Somatic cells are diploid (2n) throughout; after S phase they have 4C DNA but are still 2n, and hepatocytes are often polyploid on top of that. Only gametes are haploid."],
  ["G2",0,"These options all presuppose a haploid stage that does not exist in a somatic cell cycle. Watch the distinction between ploidy (n) and DNA content (C) \u2014 replication changes C, not n."],
  ["S",0,"These options all presuppose a haploid stage that does not exist in a somatic cell cycle. Watch the distinction between ploidy (n) and DNA content (C) \u2014 replication changes C, not n."],
  ["G1",0,"These options all presuppose a haploid stage that does not exist in a somatic cell cycle. Watch the distinction between ploidy (n) and DNA content (C) \u2014 replication changes C, not n."],
]},

{n:11, topic:"Cyclins and ubiquitin ligases", sec:"Master organizer 3", stem:"Cyclin D/Cdk4 functions during which of the following phase of the cell cycle?", opts:[
  ["G2",0,"These options belong to other complexes: cyclin A\u2013CDK2 in S and G2, cyclin B in M. Note on the key: this is the one question with no highlighted answer in the shared class document \u2014 nobody filled it in. G1 is unambiguous from the lecture (\u201ccyclin D and E, these are essentially the cyclins for the G1 phase, and the CDKs are 4, 6\u201d), so the answer is supplied here rather than taken from the bank."],
  ["G1",1,"Cyclin D partners CDK4 or CDK6 and acts in G1, where it phosphorylates Rb to release E2F."],
  ["M",0,"These options belong to other complexes: cyclin A\u2013CDK2 in S and G2, cyclin B in M. Note on the key: this is the one question with no highlighted answer in the shared class document \u2014 nobody filled it in. G1 is unambiguous from the lecture (\u201ccyclin D and E, these are essentially the cyclins for the G1 phase, and the CDKs are 4, 6\u201d), so the answer is supplied here rather than taken from the bank."],
  ["S",0,"These options belong to other complexes: cyclin A\u2013CDK2 in S and G2, cyclin B in M. Note on the key: this is the one question with no highlighted answer in the shared class document \u2014 nobody filled it in. G1 is unambiguous from the lecture (\u201ccyclin D and E, these are essentially the cyclins for the G1 phase, and the CDKs are 4, 6\u201d), so the answer is supplied here rather than taken from the bank."],
], note:"This is the one question with no highlighted answer in the shared class document \u2014 nobody filled it in. G1 is unambiguous from the lecture (\u201ccyclin D and E are the cyclins for the G1 phase, and the CDKs are 4, 6\u201d), so the answer here is derived rather than taken from the bank."},

{n:12, topic:"Kinetochore and capture", sec:"\u00a74", stem:"Kinetochores assemble at the:", opts:[
  ["Spindle pole",0,"The spindle pole is where the microtubule minus ends are."],
  ["Centrosome",0,"The centrosome is the MTOC at the pole."],
  ["Centromere",1,"Kinetochores assemble at the centromere \u2014 on centromeric DNA, with the inner kinetochore, outer kinetochore and corona built outward from there."],
  ["Telomere",0,"Telomeres are chromosome ends and have nothing to do with spindle attachment. Centromere and centrosome are the pair most easily confused \u2014 centromere is on the chromosome."],
]},

{n:13, topic:"ES cell culture", sec:"\u00a723", stem:"John was very excited to present his data in the lab meeting as his embryonic stem cells were healthy and growing rapidly. When he presented his data in the lab meeting, his supervisor asked him if he x-ray irradiated the feeder fibroblasts cells and if there was a control experiment with only the fibroblasts. John said yes, he irradiated the cells but did not do a control. The supervisor was not convinced with the data and asked him to repeat the experiment with proper control. Why?", opts:[
  ["The control experiments with only the feeder cells will ensure that the feeder cells are producing OCT3/4, SOX2, KLF4 , and C-myc transcription factors",0,"OCT3/4, SOX2, KLF4 and c-MYC are Yamanaka's reprogramming factors, not something feeder fibroblasts supply."],
  ["The control experiment will ensure that all the feeder cells have damaged DNA causing cell cycle arrest",1,"The feeder-only control exists to prove the irradiation actually worked \u2014 that every feeder cell has damaged DNA and is arrested. If even a few feeders survived irradiation they would divide and contaminate the ES-cell culture, and you would never know."],
  ["The control experiments with only the feeder cells will ensure that the feeder cells are secreting the growth factors",0,"This option is the strongest distractor \u2014 growth-factor secretion is indeed why feeders are used, but a feeder-only plate does not test secretion; it tests whether anything grows."],
  ["All of the answers are correct",0,"This option fails because only (b) is correct."],
]},

{n:14, topic:"Early development", sec:"\u00a722", stem:"In mammalian development, which of the following is the CORRECT chronological order of events?", opts:[
  ["blastocyst, zygote, four-cell, compacted morula",0,"Starts at the blastocyst, which is the last of the four stages, not the first."],
  ["four-cell, compacted morula, blastocyst, zygote",0,"Puts the zygote last. The zygote is the single fertilised cell and must come first."],
  ["compacted morula, blastocyst, zygote, four-cell",0,"Starts mid-way and ends at the four-cell stage \u2014 both ends are wrong."],
  ["zygote, four-cell, compacted morula, blastocyst",1,"Zygote \u2192 four-cell \u2192 compacted morula \u2192 blastocyst. One cell, cleavage to a ball of cells, compaction, then cavitation into the blastocyst with its trophectoderm and inner cell mass."],
]},

{n:15, topic:"Kinetochore and capture", sec:"\u00a76, Master organizer 1", stem:"Congression of the chromosomes at the metaphase plate is achieved EXCEPT which of the following process and components?", opts:[
  ["Dual head kinesin 7 pushing kinetochores towards the rapidly growing (+) end of that specific kinetochore MTs",0,"These options are all real congression mechanisms from the lecture: kinesin-7 pushing toward the plus end, dynein pulling poleward while kinesin-13 shrinks that microtubule behind it, and kinesin-4 carrying the chromosome arms."],
  ["Dynein motor proteins pulling the kinetochores towards the (-) end of the kinetochore MTs and Kinesin 13 rapidly shrinking that dynein specific (+) end of the kinetochore MTs",0,"These options are all real congression mechanisms from the lecture: kinesin-7 pushing toward the plus end, dynein pulling poleward while kinesin-13 shrinks that microtubule behind it, and kinesin-4 carrying the chromosome arms."],
  ["Dual head Kinesin 4 orient and align the arms of the chromosomes properly at the metaphase plate to aid in proper segregation of the sister chromatids during next phase of anaphase",0,"These options are all real congression mechanisms from the lecture: kinesin-7 pushing toward the plus end, dynein pulling poleward while kinesin-13 shrinks that microtubule behind it, and kinesin-4 carrying the chromosome arms."],
  ["Bi-orientation of chromosomes, where each kinetochore of the sister chromatids are attached with kinetochore MTs from the same spindle pole",1,"Bi-orientation means the two sister kinetochores attach to microtubules from opposite poles. The option says the same spindle pole, which is the defective state \u2014 so it is the one process that does not achieve congression."],
]},

{n:16, topic:"Stem cell basics", sec:"\u00a718", stem:"Daughter cells that form as a result of asymmetric cell division may differ in:", opts:[
  ["Size",0,"True on its own. Asymmetric division can also produce daughters differing in shape and protein composition, so the complete answer is all of them."],
  ["Protein composition",0,"True on its own, but size and shape can differ too."],
  ["Shape",0,"True on its own, but size and protein composition can differ too."],
  ["All of the answers are correct",1,"All of them. Daughters of an asymmetric division can differ in size, shape and protein composition \u2014 that difference is what makes the division asymmetric and lets one daughter stay a stem cell."],
]},

{n:17, topic:"Kinetochore and capture", sec:"\u00a75", stem:"Capture of microtubule (+) ends by chromosomes occurs during:", opts:[
  ["Metaphase",0,"By metaphase capture is already complete and the chromosomes are aligned."],
  ["Telophase",0,"Telophase is nuclear reassembly at the end of mitosis \u2014 long after capture."],
  ["Anaphase",0,"In anaphase they are being pulled apart."],
  ["Prometaphase",1,"Capture happens in prometaphase, after the nuclear envelope breaks down and before the chromosomes are aligned. Search-and-capture is how the plus ends find kinetochores, by accident."],
]},

{n:18, topic:"Cyclins and ubiquitin ligases", sec:"Master organizer 3, \u00a711", stem:"All the following statements about the destruction of cyclins are true EXCEPT:", opts:[
  ["destruction is preceded by polyubiquitination",0,"These options are all true of cyclin destruction: polyubiquitination first, at specific sites, then the proteasome."],
  ["ubiquitination occurs at speci\ufb01c sites on target molecules",0,"These options are all true of cyclin destruction: polyubiquitination first, at specific sites, then the proteasome."],
  ["ubiquitin targets Cdks",1,"Ubiquitin targets the cyclins, not the CDKs. This is the point the instructor called the one where people get confused: CDK protein levels are constant across the whole cycle; only the cyclins are made and destroyed."],
  ["destruction is carried out by proteasomes",0,"These options are all true of cyclin destruction: polyubiquitination first, at specific sites, then the proteasome."],
]},

{n:19, topic:"Cyclins and ubiquitin ligases", sec:"Master organizer 4", stem:"Exit from mitosis depends on the degradation of:", opts:[
  ["Cohesion",0,"Cohesin degradation triggers anaphase, not mitotic exit."],
  ["Securin",0,"Securin degradation is what frees separase to cut cohesin \u2014 again the anaphase trigger, one step earlier."],
  ["Condensin",0,"Condensin condenses chromosomes; it is not the exit signal. Securin/cohesin = enter anaphase. Cyclin B = exit mitosis."],
  ["Cyclin B",1,"Exit from mitosis requires degradation of cyclin B \u2014 the mitotic cyclin \u2014 by APC/C\u2013Cdh1. If M-CDK stayed active the daughter cells would keep their chromosomes condensed and head straight back into mitosis before they had grown."],
]},

{n:20, topic:"Spindle microtubules", sec:"Master organizer 1", stem:"The microtubules that extend towards the center plate of the cell but don\u2019t capture chromosomes are called _______________; the ones that capture chromosomes are called ______________; and the microtubules that extend towards the periphery of the cell are called ________________.", opts:[
  ["Polar MT; Kinetochore MT; Astral MT",1,"Polar MT; Kinetochore MT; Astral MT \u2014 in the order the blanks are asked. Toward the centre but missing the chromosomes = polar; capturing chromosomes = kinetochore; toward the periphery = astral."],
  ["Kinetochore MT; Astral MT; Polar MT",0,"Shuffled. The first blank describes microtubules that reach the centre but miss the chromosomes \u2014 those are polar, not kinetochore."],
  ["Polar MT; Astral MT; Kinetochore MT",0,"The first blank is right, but the last two are swapped: the ones that capture chromosomes are kinetochore MTs, and the ones heading for the periphery are astral."],
  ["Astral MT; Polar MT; Kinetochore MT",0,"Astral microtubules grow toward the periphery, not the centre, so the first blank is wrong."],
]},

{n:21, topic:"Early development", sec:"\u00a722", stem:"The FIRST differentiation event following fertilization occurs when the:", opts:[
  ["trophoectoderm separates from the inner cell mass",1,"The first differentiation event is the trophectoderm separating from the inner cell mass, at the blastocyst stage. That is the first time cells become committed to different fates."],
  ["morula separates from the blastocyst",0,"This option is not an event: the morula becomes the blastocyst, it does not separate from it."],
  ["zygote divides to form two cells",0,"These options are cleavage divisions \u2014 more cells, no commitment; morula cells are still totipotent."],
  ["four-cell stage undergoes cleavage to generate the eight-cell stage",0,"These options are cleavage divisions \u2014 more cells, no commitment; morula cells are still totipotent."],
]},

{n:22, topic:"Cyclins and ubiquitin ligases", sec:"\u00a711", stem:"All of the following are true about Cdk-cyclins EXCEPT:", opts:[
  ["All of the answers are correct",0,"This option fails because (b) is false."],
  ["They are heterotrimeric with  \ud835\udec2,\ud835\udec3, and \ud835\udec4 subunits, and phosphorylate other proteins",1,"Cdk\u2013cyclin complexes are heterodimers\u2014 two different proteins, one cyclin and one CDK. \u03b1, \u03b2 and \u03b3 subunits belong to the heterotrimeric G protein from Module 5, not here. That cross-module import is what makes this the false statement."],
  ["They were originally known as mitosis promoting factors (MPFs).",0,"True \u2014 originally identified as MPF."],
  ["They regulate the eukaryotic cell cycle by arresting progression through checkpoints along with other proteins",0,"True \u2014 they regulate the cycle and arrest it at checkpoints."],
  ["Cyclins are destroyed by proteasomes in cyclic fashion after each particular phase of cell cycle such as G1, S, G2 and Mitosis",0,"True \u2014 cyclins are destroyed by proteasomes in cyclic fashion after each phase."],
]},

{n:23, topic:"Anaphase", sec:"\u00a78", stem:"Which of the following occurs during anaphase A?", opts:[
  ["The spindle elongates.",0,"Spindle elongation is anaphase B."],
  ["Kinetochores remain attached to shortening kinetochore microtubules.",1,"In anaphase A the kinetochore microtubules shorten while the kinetochores stay attached to them \u2014 the chromosomes ride the shrinking track to the poles, with kinesin-13 depolymerising ahead of and behind the attachment."],
  ["The spindle poles move closer together.",0,"The poles move apart, not together."],
  ["Chromosomes move to the spindle equator.",0,"Movement to the equator is congression, at metaphase."],
]},

{n:24, topic:"Potency", sec:"Master organizer 5, \u00a718", stem:"What of the following de\ufb01nitions is incorrect?", opts:[
  ["Totipotent cells are competent to form every tissue of the organism",0,"These options are the standard totipotent / pluripotent definitions and are correct. A genuine problem with this question: option"],
  ["Stem cells are totipotent cells that have the capacity to self-renew",0,"\u2014 \u201cstem cells are totipotent cells that have the capacity to self-renew\u201d \u2014 is also false by the course's own definitions, since stem cells may be unipotent, multipotent or pluripotent as well as totipotent. Two options are arguably incorrect. Answer (c) to match the bank, but if the exam offers only one of the two, judge it on its own merits."],
  ["Progenitor cells are generally capable of giving rise to all cells of a single tissue type",1,"The keyed answer is (c): progenitor cells give rise to a restricted subset of a tissue's cells, not to all cells of a single tissue type."],
  ["Pluripotent cells are competent to form all embryonic tissues but not extraembryonic tissues",0,"These options are the standard totipotent / pluripotent definitions and are correct. A genuine problem with this question: option"],
], note:"Flagged discrepancy. The bank credits (c), but option (b) \u2014 \u201cstem cells are totipotent cells that have the capacity to self-renew\u201d \u2014 is also false by the course's own potency definitions, since stem cells may be unipotent, multipotent or pluripotent. Answer (c) to match the bank, but know that two options are arguably wrong."},

{n:25, topic:"Anaphase", sec:"\u00a78, Master organizer 2", stem:"Poleward movement of chromosomes during anaphase A requires:", opts:[
  ["kinetochore motor proteins",1,"Poleward movement in anaphase A requires kinetochore motor proteins \u2014 dynein at the kinetochore walking toward the minus end, with kinesin-13 depolymerising the track."],
  ["BimC",0,"BimC is a kinesin-5 family member, which works in the overlap zone for anaphase B, not at the kinetochore."],
  ["ATP",0,"ATP is consumed by those motors, so it is not wrong in itself \u2014 but the question asks what the movement requires mechanistically, and the motors are the answer the bank wants. If both appear on the exam, choose the motor proteins."],
  ["microtubule polymerization",0,"This option is the clear reversal: the microtubule depolymerises, it does not polymerise."],
], note:"ATP is genuinely required for the motors to work, so option (c) is not false in itself. The bank wants the mechanistic answer \u2014 kinetochore motor proteins. If both appear, choose the motors."},

{n:26, topic:"Stem cell sources", sec:"\u00a719", stem:"Which of the following is/are in the cell lineage that gives rise to T cells?", opts:[
  ["myeloid stem cell and pluripotent hematopoietic stem cell",0,"These options all route through the myeloid branch, which makes granulocytes, monocytes, erythrocytes and megakaryocytes \u2014 everything except T and B cells. GM-CFC is a myeloid colony-forming cell. Option (a) is the trap because it includes the right answer alongside a wrong one."],
  ["myeloid stem cell",0,"These options all route through the myeloid branch, which makes granulocytes, monocytes, erythrocytes and megakaryocytes \u2014 everything except T and B cells. GM-CFC is a myeloid colony-forming cell. Option (a) is the trap because it includes the right answer alongside a wrong one."],
  ["GM-CFC",0,"These options all route through the myeloid branch, which makes granulocytes, monocytes, erythrocytes and megakaryocytes \u2014 everything except T and B cells. GM-CFC is a myeloid colony-forming cell. Option (a) is the trap because it includes the right answer alongside a wrong one."],
  ["pluripotent hematopoietic stem cell",1,"T cells come from the common lymphoid progenitor, which is itself derived from the pluripotent hematopoietic stem cell. The lymphoid progenitor is not offered, so the HSC is the correct lineage answer."],
]},

{n:27, topic:"Checkpoints", sec:"\u00a715", stem:"Chk1 is activated by:", opts:[
  ["ATR",1,"Chk1 is activated by ATR (and Chk2 by ATM). ATM and ATR are the sensor kinases that scan DNA for damage; the Chk kinases are the transducers that then inhibit Cdc25."],
  ["Mad1",0,"Mad1 belongs to the spindle assembly checkpoint, a different pathway."],
  ["Mad1 and p53",0,"This option combines two wrong routes."],
  ["p53",0,"p53 is also activated downstream of ATM/ATR, but it acts through p21, not through Chk1."],
]},

{n:28, topic:"Stem cell sources", sec:"\u00a720", stem:"The Paneth cells migrate____________________ in the ___________________upon differentiation from intestinal LGR5+ stem cells.", opts:[
  ["upward, intestinal villi",0,"Upward onto the villi is what the enterocytes, goblet, tuft and neuroendocrine cells do."],
  ["downward, intestinal villi",0,"These options mix the direction and the location. Get both halves right: downward, and in the crypt."],
  ["upward, intestinal crypt",0,"These options mix the direction and the location. Get both halves right: downward, and in the crypt."],
  ["downward, intestinal crypt",1,"Paneth cells migrate downward and stay in the intestinal crypt, where they secrete antimicrobial peptides next to the LGR5+ stem cells. They are the exception to the general upward flow."],
]},

{n:29, topic:"Reprogramming", sec:"\u00a717", stem:"Fully differentiated mouse \ufb01broblasts can be reprogrammed or induced to form pluripotent stem cells when transfected with retroviral vectors that express:", opts:[
  ["All of the answers are correct",1,"All of them. Yamanaka's four transcription factors are OCT3/4, SOX2, KLF4 and c-MYC, delivered together by retroviral vectors."],
  ["c-MYC",0,"One of Yamanaka's four factors, but only one. Reprogramming needs OCT3/4, SOX2, KLF4 and c-MYC together."],
  ["KLF4",0,"One of the four, but only one. All four are needed."],
  ["SOX2",0,"One of the four, but only one. All four are needed."],
]},

{n:30, topic:"Cloning", sec:"\u00a726", stem:"Dolly, the famous sheep, was cloned using:", opts:[
  ["Cre recombinase",0,"Cre recombinase is a genome-engineering tool."],
  ["induced pluripotent stem cells",0,"iPSCs came later, from Yamanaka, and were not used for Dolly."],
  ["somatic cell nuclear transfer",1,"Dolly was cloned by somatic cell nuclear transfer \u2014 a nucleus from an adult somatic cell placed into an enucleated oocyte."],
  ["homologous recombination",0,"Homologous recombination is used to make knockouts, not clones."],
]},

{n:31, topic:"Cyclins and ubiquitin ligases", sec:"Master organizer 4, \u00a715", stem:"You perform an experiment where you prevent Cdc20 from binding to APC in a cell line that usually completes the cell cycle in 60 minutes. Your experiment prevents Cdc20 from binding to APC for 120 minutes, and then you \ufb01x and stain the DNA, securin, separase, and cohesin Which of the following would NOT be found in the observed cell?", opts:[
  ["Securin would be bound to separase (appear to co-localize).",0,"True \u2014 securin remains bound to separase, inhibiting it."],
  ["Cohesins will be localized around the sister chromatids.",0,"True \u2014 cohesins remain around the sister chromatids."],
  ["The cell would contain condensed chromosomes aligned at the metaphase plate.",0,"True \u2014 the cell is stuck at the metaphase plate. Each of these follows directly from the arrest; only (d) contradicts it."],
  ["The DNA will be decondensed because the cell is in interphase.",1,"Blocking Cdc20 from binding APC means securin is never degraded, so separase stays inhibited, cohesin is never cut, and the cell is arrested in metaphase. Its chromosomes are therefore condensed and aligned, not decondensed \u2014 so (d) is what you would not see."],
]},

{n:32, topic:"Cyclins and ubiquitin ligases", sec:"Master organizer 4", stem:"Which of the following is a target of the APC?", opts:[
  ["Cdc25",0,"Cdc25 is a phosphatase regulated by the Chk kinases."],
  ["Cdc28",0,"Cdc28 is a CDK, and CDKs are not degraded."],
  ["Cyclin B",1,"Cyclin B is an APC target \u2014 degraded by APC/C\u2013Cdh1 so the cell can exit mitosis."],
  ["Separase",0,"Separase is activated by the APC pathway (indirectly, by destroying securin), not degraded by it \u2014 the strongest distractor."],
]},

{n:33, topic:"Checkpoints", sec:"\u00a716", stem:"Which of the following inhibits cyclin A/Cdk2 activity?", opts:[
  ["p21CIP",1,"p21\u1d9c\u1da6\u1d56 is the broad-spectrum CDK inhibitor induced by p53. It binds essentially any cyclin\u2013CDK complex, cyclin A/CDK2 included."],
  ["both INK4 and Rb",0,"This option fails because both halves are wrong."],
  ["INK4",0,"INK4 inhibits CDK4 and CDK6 only \u2014 so it cannot touch cyclin A/CDK2."],
  ["Rb",0,"Rb is not a CDK inhibitor at all \u2014 it sequesters the transcription factor E2F; it is also a substrate of cyclin\u2013CDK, not an inhibitor."],
]},

{n:34, topic:"Potency", sec:"Master organizer 5, \u00a722", stem:"Which of the following characterizations of the maximum cell potential is FALSE?", opts:[
  ["The cells of the trophectoderm are pluripotent",1,"Trophectoderm cells are multipotent, not pluripotent. Once the blastocyst has formed, the outer layer is already committed and makes ectoderm-derived tissues only. The instructor said it directly: \u201conce it forms the ectoderm it becomes multipotent.\u201d"],
  ["The cells of an eight-cell embryo are totipotent",0,"These options are true \u2014 morula cells, up to the 64-cell stage, are totipotent."],
  ["The cells of the inner cell mass are pluripotent",0,"This option is true \u2014 the inner cell mass is the pluripotent population and the source of ES cells. This is the easiest potency question to get wrong, because \u201cembryonic\u201d reads as \u201cpluripotent.\u201d"],
  ["The cells of the morula are totipotent",0,"These options are true \u2014 morula cells, up to the 64-cell stage, are totipotent."],
]},

{n:35, topic:"Stem cell sources", sec:"\u00a720", stem:"Which of the following property of the +4 stem cell is correct?", opts:[
  ["It can differentiate into Paneth Cells",0,"True \u2014 the +4 cell can give rise to Paneth cells. It can also give rise to the other two, so the complete answer is all of them."],
  ["It can differentiate into enterocytes",0,"True \u2014 but it can also make Paneth and goblet cells."],
  ["It can differentiate into Goblet cells",0,"True \u2014 but it can also make Paneth cells and enterocytes."],
  ["All of the answer choices are correct",1,"All three. The +4 stem cell is the reserve population in the intestinal crypt and can give rise to Paneth cells, absorptive enterocytes and goblet cells."],
]},

{n:36, topic:"Kinetochore and capture", sec:"\u00a77", stem:"A few non-phosphorylated ___________proteins binds to MTs, create a tension, and move the _________complex away from the ___________ leading to more non-phosphorylated proteins and more tension to the CPC (chromosome passenger complex) to bi-orient the chromosomes.", opts:[
  ["NDC80; NDC80; Aurora B Kinase",1,"NDC80; NDC80; Aurora B kinase. A few non-phosphorylated NDC80 proteins are sticky and bind microtubules; the motors then pull the NDC80 complex away from Aurora B kinase at the inner kinetochore. Out of Aurora B's reach, more NDC80 loses its phosphate, becomes sticky, and binds more microtubules \u2014 a self-reinforcing loop that produces bi-orientation."],
  ["Aurora B Kinase; Aurora B Kinase; NDC80",0,"These options put Aurora B in the role of the thing being moved; Aurora B is the kinase left behind, which is the entire point. Remember the counter-intuitive rule: phosphorylated NDC80 is not sticky; unphosphorylated is."],
  ["None of the above",0,"There is a correct mapping: NDC80; NDC80; Aurora B kinase."],
  ["Aurora B Kinase ; NDC80; Kinesin",0,"These options put Aurora B in the role of the thing being moved; Aurora B is the kinase left behind, which is the entire point. Remember the counter-intuitive rule: phosphorylated NDC80 is not sticky; unphosphorylated is."],
]},

{n:37, topic:"Anaphase", sec:"\u00a78, Master organizer 2", stem:"Separation of spindle poles during spindle formation and anaphase B MOST likely depends on which of the following?", opts:[
  ["(+) end-directed microtubule motors in the microtubule overlap zone",1,"Pole separation in anaphase B depends on (+) end-directed motors in the microtubule overlap zone \u2014 dual-headed kinesin-5 with one head on each antiparallel polar microtubule, walking plus-ward and sliding them past each other."],
  ["(+) end-directed microtubule motors at the cell cortex",0,"Motors at the cell cortex are dynein, which is minus-end directed and stretches the membrane \u2014 a different mechanism."],
  ["(\u2013) end-directed microtubule motors in the microtubule overlap zone",0,"A minus-end motor there would pull the poles together."],
  ["(+) end-directed microtubule motors at the kinetochore",0,"Kinetochore motors move chromosomes, not poles."],
]},

{n:38, topic:"Reprogramming", sec:"\u00a717", stem:"Electroconvulsive therapy (ECT) is a reasonable option for intractable depression or schizophrenia, but a mechanism of action has not been established. One credible hypothesis is related to neural plasticity. Below is the neuronal gene expression assay for four genes after ECT, normalized with the Hamilton depression rating scale of 21 items version (HAM-D-21). Which of the following conclusion you may NOT conclude from the data?", opts:[
  ["Neural plasticity steadily increases with the number of ECT administration",1,"Read the figure. OCT4 rises to the 6th ECT and then falls by the 10th, and KLF4 is nearly flat \u2014 so the four factors do not rise together in a steady way. You cannot conclude that neural plasticity steadily increases with the number of administrations."],
  ["ECT seems to increase the expression of Yamanaka\u2019s four transcription factors",0,"You can conclude it: all four Yamanaka factors are higher after ECT than before."],
  ["ECT may increase neural plasticity",0,"\u201cMay increase\u201d is appropriately hedged and supported."],
  ["ECT may convert adult neurons into IPSCs which may divide and differentiate into healthy adult neurons",0,"\u201cMay convert\u201d is likewise a hypothesis consistent with the data. The word doing the work in the correct answer is \u201csteadily\u201d \u2014 the only unhedged claim in the set."],
], fig:"ect-genes.png", figcap:"Neuronal gene expression after ECT, normalised to HAM-D-21. OCT4 peaks at the 6th treatment and falls by the 10th; KLF4 is nearly flat."},

{n:39, topic:"DNA replication control", sec:"\u00a714", stem:"During G1, prereplication complexes:", opts:[
  ["All of the answer choices are correct.",0,"This option fails for that reason."],
  ["are phosphorylated by B-type cyclin-CDKs",0,"These options are S-phase events \u2014 phosphorylation by S-phase CDKs and DDK is what releases the complex, and it happens after G1."],
  ["bind to ORC (origin recognition complex)",1,"During G1 the pre-replication complex assembles at origins and binds to the ORC (origin recognition complex). Everything is in place but held inactive until the restriction point is passed."],
  ["are phosphorylated by DDK",0,"These options are S-phase events \u2014 phosphorylation by S-phase CDKs and DDK is what releases the complex, and it happens after G1."],
]},

{n:40, topic:"Potency", sec:"\u00a722", stem:"In the mouse embryo, pluripotent stem cells are found in the:", opts:[
  ["zona pellucida",0,"The zona pellucida is the glycoprotein coat around the embryo."],
  ["blastocoel",0,"The blastocoel is the fluid-filled cavity, not a cell population."],
  ["trophectoderm",0,"The trophectoderm is multipotent, the classic distractor."],
  ["inner cell mass",1,"Pluripotent stem cells are in the inner cell mass of the blastocyst \u2014 this is the population ES cells are derived from."],
]},

{n:41, topic:"Spindle microtubules", sec:"Master organizer 1", stem:"Which of the following is NOT true of mitotic microtubules?", opts:[
  ["Astral microtubules extend from the spindle poles to the cell cortex and orient the axis of cell division.",0,"True \u2014 astral MTs reach the cortex and orient the division axis."],
  ["Kinetochore microtubules are responsible for pushing the spindle poles apart in anaphase B.",1,"Pushing the spindle poles apart in anaphase B is the job of the polar microtubules, via dual-headed kinesin-5 in the overlap zone \u2014 not the kinetochore microtubules, which shorten to pull chromosomes poleward in anaphase A."],
  ["Polar microtubules are required for maintaining spindle structure.",0,"True \u2014 polar MTs maintain spindle structure."],
  ["Kinetochore microtubules use a search-and-capture mechanism to link spindle poles to kinetochores.",0,"True \u2014 search-and-capture is how kinetochore MTs find kinetochores."],
]},

{n:42, topic:"Anaphase", sec:"\u00a78", stem:"Towards the end of Anaphase and Telophase, the cell elongates by which  of the following mechanisms?", opts:[
  ["The astral microtubules grow towards the plus end and cell periphery and the dynein motors attached to the plasma membrane try to walk towards the minus end of the astral microtubules resulting the cell to stretch",1,"Cell elongation late in anaphase and telophase: astral microtubules grow plus-end-outward toward the cell periphery, and dynein motors anchored in the plasma membrane try to walk toward the minus end. The membrane cannot move, so tension builds and new plasma membrane is synthesised \u2014 the cell stretches."],
  ["The polar microtubules grow towards the plus end and cell periphery and the dynein motors attached to the plasma membrane try to walk towards the minus end of the polar microtubules resulting the cell to stretch",0,"This option says polar microtubules \u2014 those act in the overlap zone, not at the periphery."],
  ["The astral microtubules grow towards the cell plus end and cell periphery and the kinesin motors attached to the plasma membrane try to walk towards the minus end of the astral microtubules resulting the cell to stretch",0,"This option says kinesin motors \u2014 kinesins are plus-end directed, so they would not generate this tension; dynein is the minus-end motor."],
  ["The astral microtubules grow towards the minus end and cell periphery and the dynein motors attached to the plasma membrane try to walk towards the plus end of the astral microtubules resulting the cell to stretch",0,"This option reverses the polarity, having the MTs grow toward the minus end and dynein walk plus-ward. Check three things in every option: which microtubule, which motor, which direction."],
]},

];
