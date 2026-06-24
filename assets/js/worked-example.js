/* ============================================================================
   WORKED-EXAMPLE DATA — SINGLE SOURCE OF TRUTH.

   Both the Procedure Breakdown (procedures.html) and the methodology phone
   mocks (methodology.html) read from this file, so they always stay in sync.
   To onboard another client SOP, add/edit a procedure entry here only.

   Shape per procedure key:
     { title, pages,
       sop:      [[step, sub?], ...],                       // work instruction
       training: [[skill, mastered(0|1), trainerInstructions], ...],
       obs:      [[prompt, whatToLookFor, [scoreCounts]], ...] }

   MAPPING into the runner mocks:
     training[i][0] -> training step title       obs[j][0] -> observation prompt title
     training[i][2] -> training step body        obs[j][1] -> observation subtitle ("what to look for")
     training[i][1] -> checkbox / mastered       SCALE     -> Always / Mostly / Somewhat / Never
   ============================================================================ */

window.EXAMPLES = {
  T:{
    title:"Receive/Verify ASN — International Freight",
    pages:"80–89",
    sop:[
      ["Obtain the ASN Control Log from the AM or OC at the receiving desk.","Contains ASN #, Door #, Container #, Item TI-HI, Inner Pack Qty."],
      ["Walk to the door number noted on the ASN Control Log."],
      ["Verify the plaque on the pallet rows matches the ASN number on the log."],
      ["Check the SKU on the ASN matches the assigned container."],
      ["Count the offloaded pallets; note on the tally sheet.","1 SKU/pallet → continue. >1 SKU/pallet → contact AM/OC and wait."],
      ["Verify Unloaders followed the TI-HI for each SKU (see Section K)."],
      ["For each SKU, check the PO number printed on the carton."],
      ["Count total boxes per pallet × units per box (e.g. 24 cases × 20 = 480)."],
      ["Calculate total units and verify against the ASN Report."],
      ["RF Gladiator: log in to WMOS → Receiving → Recv Item Lvl-HFT."],
      ["Enter dock door, scan ASN, scan iLPN; verify Pack Qty, enter Qty."],
      ["Place the iLPN on the bottom-right corner of the pallet; repeat per SKU."],
      ["Tally total unit count and write it beside “Received” on the ASN paperwork."],
      ["Close the load via the UI at a workstation."]
    ],
    training:[
      ["Locate & read the ASN Control Log (ASN#, Door#, Container#, TI-HI, inner pack)",1,"Have them read every field out loud before leaving the desk — ASN#, Door#, Container#, TI-HI and inner-pack qty. The log drives everything downstream."],
      ["Match pallet plaque to the ASN number",1,"Finger on the plaque, finger on the log — the numbers must match exactly before any counting starts. No eyeballing."],
      ["Verify SKU on ASN against the assigned container",1,"Confirm the ASN's SKU is the one in the assigned container. A wrong container means stop and check, not improvise."],
      ["Count pallets and record on the tally sheet",1,"Count offloaded pallets and write the tally as they go — never reconstruct the count from memory at the end."],
      ["Identify single- vs multi-SKU pallet and escalate correctly",0,"One SKU per pallet continues. More than one means stop and call AM/OC — teach the escalation, not a workaround."],
      ["Verify TI-HI against the ASN for each SKU",0,"Check each SKU's stack against the TI-HI (Section K). A wrong TI-HI is a receiving error waiting to happen."],
      ["Cross-check the PO number printed on the carton",0,"Show them where the PO prints on the carton, and have them match it to the ASN for every SKU."],
      ["Calculate total units (boxes × units per box)",0,"Walk the math once together — boxes × units per box (24 × 20 = 480) — then have them do the next SKU unaided."],
      ["Reconcile counted total against the ASN Report",0,"Counts must match the ASN Report. On a mismatch they recount first — never assume the paperwork is right."],
      ["Log in to WMOS and navigate Recv Item Lvl-HFT on the RF gun",0,"Walk the RF Gladiator login and the Receiving → Recv Item Lvl-HFT path until they find it without prompting."],
      ["Receive item-level: dock door, iLPN, pack qty, qty",0,"Verify pack qty before they enter quantity — entering qty against the wrong pack is the most common mistake."],
      ["Place the iLPN in the correct pallet position",0,"Bottom-right corner, facing out, one per pallet per SKU — so putaway can read it without hunting."],
      ["Tally & record “Received” on ASN paperwork; close the load",0,"Final unit count written beside “Received,” then close the load at the workstation. The receive isn't done until it's closed."]
    ],
    obs:[
      ["Verifies ASN, SKU and PO match before receiving any product.","Watch them physically check the plaque and carton PO — not just glance. Mismatches should stop the receive.",[1,3,3,3]],
      ["Maintains one SKU per pallet and escalates mixed pallets.","Mixed-SKU pallets must trigger a call to AM/OC, not a workaround.",[0,2,3,2]],
      ["Counts and reconciles units accurately against the ASN.","Re-counts on discrepancy; tallies per-pallet before flagging.",[0,2,3,3]],
      ["Places the iLPN in the correct position (bottom-right, facing out).","Label visible for putaway; one iLPN per pallet per SKU.",[0,1,2,3]],
      ["Practices CAYGO and keeps the receiving area clean.","No debris, straps, or wrap left in the work lane.",[2,0,1,3]]
    ]
  },
  L:{
    title:"SKUs with FIFO Labeling Requirement",
    pages:"36–38",
    sop:[
      ["Open the DC FIFO Shelf Life Labeling SKUs spreadsheet from the shared drive."],
      ["Obtain the PO / packing slip for the freight to be unloaded."],
      ["Check whether each SKU is listed in the FIFO spreadsheet."],
      ["Determine if the sticker applies to master pack only, or master + inner.","Yellow = master + inner pack. Blue = master pack only."],
      ["Use the year’s color sticker (e.g. 2020 = green)."],
      ["OC notifies the Receiver of inbound SKUs needing colored stickers."],
      ["Receiver locates the staged item and gets the roll of stickers + empty pallet."],
      ["Master pack: apply label to top outside of the case; stack per TI-HI."],
      ["Master + inner: label master, open and label inner, replace, re-label master top."],
      ["Receive the item into WMOS per the Item-Level Receiving SOP."]
    ],
    training:[
      ["Open and read the DC FIFO Shelf Life SKU spreadsheet",1,"Show them where the FIFO spreadsheet lives on the shared drive — and that it's checked every load, not from memory."],
      ["Match PO / packing-slip SKUs against the FIFO list",1,"Cross-reference each SKU on the PO/packing slip against the FIFO list before touching a single sticker."],
      ["Interpret the yellow vs blue color code (master+inner vs master-only)",0,"Yellow = master + inner pack; blue = master pack only. Quiz them until there's no hesitation."],
      ["Select the correct year color sticker",0,"Current-year color only (e.g. 2020 = green). A wrong year defeats the entire point of FIFO."],
      ["Apply master-pack label in the correct position",0,"Top outside of the case, every time — placement is what makes it readable once it's in the rack."],
      ["Open, label and re-seal inner packs correctly",0,"For yellow SKUs: open, label the inner, replace it, then re-label the master top. Watch they re-seal cleanly."],
      ["Stack labeled cases per the required TI-HI",0,"Build the pallet to the TI-HI as they label — no loose or mis-stacked cases left behind."],
      ["Receive the labeled item into WMOS",0,"Only once labeling is fully complete do they receive the item per the Item-Level Receiving SOP."]
    ],
    obs:[
      ["Correctly identifies which SKUs require FIFO labeling.","Cross-references the spreadsheet every load — doesn’t rely on memory.",[0,3,2,2]],
      ["Applies the right label scope (master-only vs master + inner).","Yellow SKUs get the inner pack opened and labeled; blue do not.",[0,3,2,1]],
      ["Uses the correct year color and label placement.","Label on top outside of case, current-year color only.",[0,2,2,2]],
      ["Stacks labeled cases per TI-HI before system receive.","Pallet built to spec; no loose or mis-stacked cases.",[1,1,2,2]]
    ]
  },
  V:{
    title:"Receive/Verify ASN — Domestic Freight",
    pages:"93–96",
    sop:[
      ["Obtain the signed BOL that came with the load plus a blank ASN Control Log."],
      ["Tally case count and unit count for each SKU; enter on the control log.","Ensure one SKU per pallet; >1 → contact AM/OC."],
      ["Match physical total unit & case count for each SKU to the BOL."],
      ["If the BOL is not available, ask the Receiving Clerk to pull PO details from WMOS."],
      ["Once counts match the BOL, log in to WMOS at the nearest workstation."],
      ["Create an ASN from PO: search “Create ASN From PO”, find the PO, Add.","Domestic ASN numbers begin with “D”."],
      ["Select PO line items, set Shipped Qty, Save — ASN goes “In Transit.”"],
      ["Print the ASN (see Section H)."],
      ["Receive the domestic shipment using the same steps as Section T."]
    ],
    training:[
      ["Obtain and read the signed BOL + blank ASN Control Log",1,"Start from the signed BOL and a blank control log. No BOL means they pull PO details from WMOS — not guess."],
      ["Tally case and unit counts per SKU onto the control log",1,"Tally case and unit counts per SKU onto the log as they count, keeping one SKU per pallet."],
      ["Match physical counts to the BOL",0,"Physical counts must match the BOL before anything enters the system — note any discrepancy on the BOL."],
      ["Recover PO details from WMOS when the BOL is missing",0,"Show them how to ask the Receiving Clerk to pull PO details from WMOS when the BOL isn't available."],
      ["Create an ASN from PO in WMOS (D-prefix)",0,"Search “Create ASN From PO,” find the right PO, Add — domestic ASN numbers begin with “D.”"],
      ["Set shipped qty and move the ASN to In-Transit",0,"Select the PO line items, set Shipped Qty, Save — then confirm the ASN status reaches “In Transit.”"],
      ["Print the ASN",0,"Print the ASN per Section H so it's ready for the physical receive."],
      ["Receive the shipment per the Section T flow",0,"From here it's the Section T flow — same item-level receive, iLPN placement and close-out."]
    ],
    obs:[
      ["Reconciles physical counts to the BOL before creating the ASN.","Counts are matched, not assumed; discrepancies noted on the BOL.",[0,2,3,2]],
      ["Creates the ASN from PO correctly (D-prefix, right line items).","Right PO, correct shipped qty, status reaches In-Transit.",[0,3,2,1]],
      ["Keeps one SKU per pallet and escalates exceptions.","Mixed pallets escalated to AM/OC before proceeding.",[0,2,3,2]],
      ["Completes system receive accurately following Section T.","iLPNs placed and counts recorded against the ASN.",[0,2,3,2]]
    ]
  }
};

window.SCALE = [["Always",4],["Mostly",3],["Somewhat",2],["Never",1]];
