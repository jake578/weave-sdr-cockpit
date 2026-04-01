// Mock data for Weave SDR Action Queue Cockpit
// Weave: unified communications & patient engagement platform for healthcare practices

export const accounts = [
  {
    id: 'acc-001',
    company: 'Bright Smile Dental Group',
    size: '4 locations, ~60 staff',
    location: 'San Diego, CA',
    industry: 'Dental (DSO)',
    revenue: '$4.2M',
    currentTools: 'Demandforce, separate VoIP phone system, manual texting via front desk cell phones',
    founded: '2017',
    specialties: ['General Dentistry', 'Cosmetic', 'Orthodontics', 'Pediatric'],
    website: 'brightsmiledentalgroup.com',
    aiScore: 94,
    fitScore: 96,
    intentScore: 93,
    timingScore: 92,
    dealValue: '$19,200/yr',
    seats: '4 locations',
    whyPrioritized: 'Pricing page visited 3x in 48 hours, AI Receptionist demo request submitted, multi-location DSO with fragmented comm stack. Contract with Demandforce renews in 6 weeks.',
    contacts: [
      {
        name: 'Dr. Marcus Chen',
        title: 'CEO & Founder',
        email: 'mchen@brightsmiledentalgroup.com',
        phone: '(619) 555-0142',
        isPrimary: false
      },
      {
        name: 'Rachel Torres',
        title: 'COO / Practice Administrator',
        email: 'rtorres@brightsmiledentalgroup.com',
        phone: '(619) 555-0188',
        isPrimary: true
      },
      {
        name: 'Kevin Nguyen',
        title: 'Office Manager - Main Location',
        email: 'knguyen@brightsmiledentalgroup.com',
        phone: '(619) 555-0201',
        isPrimary: false
      }
    ],
    signals: [
      { type: 'website', detail: 'Visited pricing page 3 times in 48 hours', time: '2 hours ago', strength: 'hot' },
      { type: 'website', detail: 'Submitted AI Receptionist demo request form', time: '5 hours ago', strength: 'hot' },
      { type: 'website', detail: 'Viewed AI Receptionist product page (4 min read)', time: '1 day ago', strength: 'warm' },
      { type: 'email', detail: 'Opened "Reduce Missed Calls by 80%" email twice', time: '2 days ago', strength: 'warm' }
    ],
    callScript: {
      opening: "Hi Rachel, this is Alex Rivera with Weave. I saw your team submitted a request to see the AI Receptionist in action — I'd love to get that scheduled. Before I do, I wanted to quickly understand what's driving the interest so I can make sure we show you the most relevant parts.",
      discoveryQuestions: [
        "With 4 locations, how are you handling after-hours calls today? Are patients hitting voicemail or getting routed somewhere?",
        "You're using Demandforce for patient communications — are you also juggling a separate phone system and texting solution on top of that?",
        "What does your missed call volume look like across locations? Do you have visibility into that today?",
        "If you could wave a magic wand and fix one communication pain point across all 4 offices, what would it be?"
      ],
      objectionHandler: "I hear you — adding another platform sounds like more complexity, not less. The reason DSOs like yours actually love Weave is it replaces 3-4 separate tools with one. Your phones, texting, reviews, payments, and now AI answering all live in one place. Most multi-location practices tell us they save 8-10 hours per week per office just from the consolidation.",
      suggestedCTA: "Let's get a 20-minute demo on the calendar this week — I'll have our DSO specialist walk you through how a 4-location group in Phoenix consolidated their entire comm stack and saved $14K/year. Does Thursday at 2 PM PT work?"
    }
  },
  {
    id: 'acc-002',
    company: 'Peninsula Eye Associates',
    size: '2 locations, ~25 staff',
    location: 'Seattle, WA',
    industry: 'Optometry',
    revenue: '$2.1M',
    currentTools: 'Birdeye (reviews), RingCentral (phone), manual appointment reminders',
    founded: '2014',
    specialties: ['Comprehensive Eye Exams', 'Contact Lens Fitting', 'Dry Eye Treatment', 'Glaucoma Management'],
    website: 'peninsulaeye.com',
    aiScore: 88,
    fitScore: 90,
    intentScore: 85,
    timingScore: 88,
    dealValue: '$9,600/yr',
    seats: '2 locations',
    whyPrioritized: 'RingCentral contract expires in 30 days — competitor displacement window. Birdeye only covers reviews, leaving phone/texting/payments fragmented. Downloaded "Optometry Practice Communication Guide" last week.',
    contacts: [
      {
        name: 'Dr. Sarah Kim',
        title: 'Owner / Lead Optometrist',
        email: 'skim@peninsulaeye.com',
        phone: '(206) 555-0334',
        isPrimary: false
      },
      {
        name: 'Jennifer Walsh',
        title: 'Practice Manager',
        email: 'jwalsh@peninsulaeye.com',
        phone: '(206) 555-0347',
        isPrimary: true
      }
    ],
    signals: [
      { type: 'website', detail: 'Downloaded "Optometry Practice Communication Guide"', time: '3 days ago', strength: 'warm' },
      { type: 'website', detail: 'Viewed Phone System product page', time: '4 days ago', strength: 'warm' },
      { type: 'linkedin', detail: 'Jennifer Walsh viewed Weave company page', time: '2 days ago', strength: 'warm' },
      { type: 'job', detail: 'RingCentral contract renewal approaching (30 days)', time: '1 week ago', strength: 'hot' }
    ],
    callScript: {
      opening: "Hi Jennifer, this is Alex Rivera with Weave. I noticed your team downloaded our Optometry Communication Guide — great timing, because I actually work with several optometry practices in the Pacific Northwest. Quick question: is your RingCentral contract coming up for renewal soon?",
      discoveryQuestions: [
        "You're using RingCentral for phones and Birdeye for reviews — do you have a separate solution for patient texting and appointment reminders too?",
        "How are your front desk teams handling the back-and-forth between these different systems? Is that creating any friction?",
        "What's your no-show rate looking like? Are you doing automated reminders today or is that manual?",
        "If patients could text your office directly — to confirm appointments, ask about contacts, pay a balance — how much time do you think that would save your front desk?"
      ],
      objectionHandler: "Totally fair to be cautious about switching phone providers. What I can tell you is that Weave handles the number porting seamlessly — most practices are live in under 2 weeks with zero downtime. And since your RingCentral contract is coming up, the timing works perfectly to avoid any overlap costs.",
      suggestedCTA: "Since your RingCentral renewal is coming up, let's do a quick 15-minute call this week to show you what a unified Weave setup would look like for both locations — including the cost comparison. How's Wednesday morning?"
    }
  },
  {
    id: 'acc-003',
    company: 'Mountain View Veterinary',
    size: '1 location, ~12 staff',
    location: 'Austin, TX',
    industry: 'Veterinary',
    revenue: '$1.4M',
    currentTools: 'PetDesk (scheduling), traditional landline phones, no texting platform',
    founded: '2019',
    specialties: ['Small Animal Care', 'Surgery', 'Dental', 'Urgent Care'],
    website: 'mountainviewvet.com',
    aiScore: 82,
    fitScore: 84,
    intentScore: 78,
    timingScore: 80,
    dealValue: '$4,800/yr',
    seats: '1 location',
    whyPrioritized: "Downloaded Weave buyer's guide, read 3 blog posts (AI Receptionist, veterinary case study, text-to-pay). Vet practices have high call volume and PetDesk doesn't cover phone or texting.",
    contacts: [
      {
        name: 'Dr. Lisa Ramirez',
        title: 'Owner / Veterinarian',
        email: 'lramirez@mountainviewvet.com',
        phone: '(512) 555-0218',
        isPrimary: false
      },
      {
        name: 'Brittany Cole',
        title: 'Office Manager',
        email: 'bcole@mountainviewvet.com',
        phone: '(512) 555-0223',
        isPrimary: true
      }
    ],
    signals: [
      { type: 'website', detail: "Downloaded Weave Buyer's Guide", time: '1 day ago', strength: 'warm' },
      { type: 'website', detail: 'Read blog: "How AI Receptionist Helps Vet Practices Never Miss a Call"', time: '2 days ago', strength: 'warm' },
      { type: 'website', detail: 'Read blog: "Text-to-Pay: Faster Collections for Veterinary Clinics"', time: '3 days ago', strength: 'warm' },
      { type: 'website', detail: 'Read veterinary case study (6 min on page)', time: '3 days ago', strength: 'warm' }
    ],
    callScript: {
      opening: "Hi Brittany, this is Alex Rivera with Weave. I noticed you've been checking out some of our veterinary-specific resources, including the AI Receptionist article — it sounds like missed calls or after-hours volume might be on your radar. Is that fair?",
      discoveryQuestions: [
        "You're using PetDesk for scheduling — are you finding it covers everything you need, or are there gaps around phone and texting?",
        "Vet clinics tend to get a ton of calls — how many calls would you estimate your team handles on a busy day? And how many go to voicemail?",
        "Are pet owners asking to text your office? How do you handle that today?",
        "What does your payment collection process look like after an appointment? Are clients paying at the desk, or do you end up chasing invoices?"
      ],
      objectionHandler: "I get it — as a single-location practice, every dollar matters. The good news is most vet practices at your size see ROI within the first 60 days. Between the calls you stop missing, the no-shows that drop with automated reminders, and the faster payment collection with text-to-pay, practices typically recover the cost of Weave within the first month.",
      suggestedCTA: "Let me show you a quick 15-minute demo focused specifically on what we do for vet practices — phones, texting, and the AI Receptionist piece that caught your eye. Does Thursday afternoon work?"
    }
  },
  {
    id: 'acc-004',
    company: 'Lakewood Family Dentistry',
    size: '1 location, ~15 staff',
    location: 'Nashville, TN',
    industry: 'Dental',
    revenue: '$1.8M',
    currentTools: 'Weave Free Trial (expired yesterday), basic phone system',
    founded: '2016',
    specialties: ['General Dentistry', 'Family Dentistry', 'Cosmetic', 'Implants'],
    website: 'lakewoodfamilydentistry.com',
    aiScore: 90,
    fitScore: 88,
    intentScore: 94,
    timingScore: 96,
    dealValue: '$6,000/yr',
    seats: '1 location',
    whyPrioritized: 'Free trial expired yesterday with extremely strong usage: 340 calls handled by AI Receptionist, 89 text conversations, 47 review requests sent. Pricing page visited same day trial expired. This is a hot conversion opportunity.',
    contacts: [
      {
        name: 'Dr. James Whitfield',
        title: 'Owner / Lead Dentist',
        email: 'jwhitfield@lakewooddentistry.com',
        phone: '(615) 555-0156',
        isPrimary: false
      },
      {
        name: 'Amanda Briggs',
        title: 'Practice Manager',
        email: 'abriggs@lakewooddentistry.com',
        phone: '(615) 555-0162',
        isPrimary: true
      }
    ],
    signals: [
      { type: 'website', detail: 'Free trial expired — 340 AI Receptionist calls handled during trial', time: '1 day ago', strength: 'hot' },
      { type: 'website', detail: 'Visited pricing page immediately after trial expiration', time: '1 day ago', strength: 'hot' },
      { type: 'email', detail: 'Opened trial recap email (showing usage stats)', time: '12 hours ago', strength: 'hot' },
      { type: 'website', detail: 'Viewed "Plans & Pricing" page again this morning', time: '3 hours ago', strength: 'hot' }
    ],
    callScript: {
      opening: "Hi Amanda, this is Alex Rivera with Weave. I'm reaching out because your free trial just wrapped up, and honestly, your team crushed it — 340 calls handled by the AI Receptionist, 89 text conversations, 47 review requests. That's one of the strongest trial performances I've seen. I imagine going back to the old way feels pretty painful right about now?",
      discoveryQuestions: [
        "Now that you've experienced the AI Receptionist for a couple weeks, what's the team's reaction? Has the front desk noticed the difference?",
        "Of those 340 calls the AI handled, do you have a sense of how many of those would have gone to voicemail before?",
        "You also sent 47 review requests during the trial — did you see any new Google reviews come in from those?",
        "What would it take to get Dr. Whitfield comfortable moving forward? Is budget the main consideration, or are there other factors?"
      ],
      objectionHandler: "I completely understand wanting to think it over. But here's the thing — every day without Weave, those after-hours calls are going to voicemail again, patients aren't getting texted, and review requests stop going out. Based on your trial data, that's roughly 24 calls per day your AI Receptionist was catching. What's each of those missed calls worth to the practice?",
      suggestedCTA: "Since you've already seen the results firsthand, let's jump on a quick 10-minute call to walk through pricing and get you locked in before those calls start going to voicemail again. I can do today at 3 PM CT — does that work?"
    }
  },
  {
    id: 'acc-005',
    company: 'ClearView Optometry',
    size: '1 location, ~8 staff',
    location: 'Portland, OR',
    industry: 'Optometry',
    revenue: '$920K',
    currentTools: 'Podium (messaging/reviews), separate analog phone system',
    founded: '2020',
    specialties: ['Comprehensive Eye Exams', 'Pediatric Vision', 'Sports Vision', 'Contact Lenses'],
    website: 'clearviewoptometry.com',
    aiScore: 76,
    fitScore: 80,
    intentScore: 74,
    timingScore: 72,
    dealValue: '$4,800/yr',
    seats: '1 location',
    whyPrioritized: 'Attended "AI in Optometry" webinar, asked 2 questions about AI answering service. Using Podium for messaging but still has separate phone system — consolidation opportunity.',
    contacts: [
      {
        name: 'Dr. Priya Patel',
        title: 'Owner / Optometrist',
        email: 'ppatel@clearviewoptometry.com',
        phone: '(503) 555-0291',
        isPrimary: true
      },
      {
        name: 'Megan Schultz',
        title: 'Front Desk Lead',
        email: 'mschultz@clearviewoptometry.com',
        phone: '(503) 555-0295',
        isPrimary: false
      }
    ],
    signals: [
      { type: 'website', detail: 'Attended "AI in Optometry" webinar — asked 2 questions about AI answering', time: '4 days ago', strength: 'warm' },
      { type: 'website', detail: 'Viewed AI Receptionist product page after webinar', time: '4 days ago', strength: 'warm' },
      { type: 'linkedin', detail: 'Dr. Patel followed Weave on LinkedIn', time: '3 days ago', strength: 'warm' }
    ],
    callScript: {
      opening: "Hi Dr. Patel, this is Alex Rivera with Weave. I noticed you attended our AI in Optometry webinar last week and asked some great questions about AI answering — specifically around how it handles appointment scheduling for eye exams. I wanted to follow up on that directly.",
      discoveryQuestions: [
        "You asked about AI handling appointment scheduling — is that because your front desk is getting overwhelmed with call volume, or is it more about after-hours coverage?",
        "You're using Podium for messaging and reviews today — how's that working? Do you find yourself wishing the phone system was connected to the same platform?",
        "When patients call after hours, what happens today? Voicemail? And do you find many of those turn into missed appointments?",
        "If the AI Receptionist could handle routine calls — appointment scheduling, hours, insurance questions — how much time would that free up for Megan and the front desk team?"
      ],
      objectionHandler: "That makes sense — Podium does a solid job with messaging. The key difference with Weave is that you'd get that same messaging capability plus the phone system, payments, and AI Receptionist all in one. So instead of paying for Podium plus a separate phone bill, you'd actually save money while adding the AI answering capability you asked about in the webinar.",
      suggestedCTA: "Would it be helpful if I set up a quick demo so you can see how the AI Receptionist actually handles optometry-specific calls? I can have it ready in 15 minutes. How's next Tuesday?"
    }
  },
  {
    id: 'acc-006',
    company: 'Coastal Pediatric Dentistry',
    size: '3 locations, ~40 staff',
    location: 'Miami, FL',
    industry: 'Dental (Pediatric)',
    revenue: '$3.1M',
    currentTools: 'RevenueWell (patient communications), separate phone system, separate texting service',
    founded: '2015',
    specialties: ['Pediatric Dentistry', 'Orthodontics', 'Sedation Dentistry', 'Special Needs Dentistry'],
    website: 'coastalpediatricdentistry.com',
    aiScore: 86,
    fitScore: 88,
    intentScore: 84,
    timingScore: 86,
    dealValue: '$14,400/yr',
    seats: '3 locations',
    whyPrioritized: 'COO replied to outbound email asking about AI Receptionist ROI specifically. Multi-location pediatric dental with fragmented tools (RevenueWell + separate phone + separate texting). High call volume from parents = strong AI Receptionist fit.',
    contacts: [
      {
        name: 'Dr. Maria Santos',
        title: 'Founder & Lead Pediatric Dentist',
        email: 'msantos@coastalpeddentistry.com',
        phone: '(305) 555-0410',
        isPrimary: false
      },
      {
        name: 'David Park',
        title: 'COO',
        email: 'dpark@coastalpeddentistry.com',
        phone: '(305) 555-0418',
        isPrimary: true
      },
      {
        name: 'Stephanie Ruiz',
        title: 'Office Manager - Brickell Location',
        email: 'sruiz@coastalpeddentistry.com',
        phone: '(305) 555-0425',
        isPrimary: false
      }
    ],
    signals: [
      { type: 'email', detail: 'COO David Park replied to outbound asking about AI Receptionist ROI', time: '1 day ago', strength: 'hot' },
      { type: 'website', detail: 'David Park visited ROI calculator page', time: '1 day ago', strength: 'hot' },
      { type: 'website', detail: 'Viewed multi-location dental case study', time: '2 days ago', strength: 'warm' },
      { type: 'linkedin', detail: 'David Park viewed Alex Rivera LinkedIn profile', time: '2 days ago', strength: 'warm' }
    ],
    callScript: {
      opening: "Hi David, this is Alex Rivera with Weave — thanks for your reply yesterday asking about AI Receptionist ROI. Great question, and I have some specific numbers from pediatric dental groups your size that I think you'll find really compelling. Do you have 5 minutes?",
      discoveryQuestions: [
        "You specifically asked about ROI — is that because you're evaluating whether to consolidate your current tools, or is the AI Receptionist the main draw?",
        "With 3 locations and a pediatric focus, I imagine you get a ton of parent calls — scheduling, insurance questions, emergency calls about kids. How is that volume distributed across your offices?",
        "You're currently on RevenueWell plus separate phone and texting tools — roughly how much are you spending across all those platforms per month?",
        "What would the ideal outcome look like for you? Is it more about cost savings, reducing front desk burden, or capturing more new patient calls?"
      ],
      objectionHandler: "Absolutely, ROI needs to be clear. Let me share a quick data point: a 3-location pediatric dental group in Tampa switched to Weave last year. They consolidated from 4 tools down to 1, saved $1,100/month in software costs, and their AI Receptionist caught an average of 45 after-hours calls per week that were previously going to voicemail. They estimated that converted to roughly $8,000/month in new patient revenue they were leaving on the table.",
      suggestedCTA: "I'd love to walk you through a custom ROI analysis for Coastal Pediatric — using your actual call volume and current tool costs. Can we set up a 20-minute call this week? I can also include Dr. Santos if she'd like to be part of the conversation."
    }
  },
  {
    id: 'acc-007',
    company: 'Valley Orthopedic Associates',
    size: '5 locations, ~80 staff',
    location: 'Denver, CO',
    industry: 'Specialty Medical (Orthopedics)',
    revenue: '$8.5M',
    currentTools: 'Generic practice management system, basic phone system, no dedicated patient communication platform',
    founded: '2011',
    specialties: ['Sports Medicine', 'Joint Replacement', 'Spine Surgery', 'Physical Therapy', 'Pain Management'],
    website: 'valleyorthopedic.com',
    aiScore: 72,
    fitScore: 78,
    intentScore: 68,
    timingScore: 70,
    dealValue: '$24,000/yr',
    seats: '5 locations',
    whyPrioritized: 'Strong ICP match — 5 locations, high revenue, no dedicated communication platform. New lead from content syndication. Large deal potential at $24K/yr. Requires more discovery but worth pursuing.',
    contacts: [
      {
        name: 'Dr. Robert Keane',
        title: 'Managing Partner',
        email: 'rkeane@valleyorthopedic.com',
        phone: '(303) 555-0512',
        isPrimary: false
      },
      {
        name: 'Patricia Hoffman',
        title: 'Director of Operations',
        email: 'phoffman@valleyorthopedic.com',
        phone: '(303) 555-0528',
        isPrimary: true
      },
      {
        name: 'Michael Torres',
        title: 'IT Manager',
        email: 'mtorres@valleyorthopedic.com',
        phone: '(303) 555-0535',
        isPrimary: false
      }
    ],
    signals: [
      { type: 'website', detail: 'Downloaded whitepaper: "Patient Communication for Specialty Practices"', time: '5 days ago', strength: 'warm' },
      { type: 'job', detail: 'Posted job opening for "Patient Experience Coordinator"', time: '1 week ago', strength: 'warm' },
      { type: 'linkedin', detail: 'Patricia Hoffman connected with Weave employee on LinkedIn', time: '6 days ago', strength: 'warm' }
    ],
    callScript: {
      opening: "Hi Patricia, this is Alex Rivera with Weave. I came across Valley Orthopedic while researching specialty practices in the Denver area, and I noticed you recently posted for a Patient Experience Coordinator — sounds like patient communication is top of mind for your team. Is that fair?",
      discoveryQuestions: [
        "With 5 locations across different specialties — sports medicine, joint replacement, PT — how are you handling patient communications today? Is it mostly through your practice management system?",
        "Orthopedic patients often have complex journeys — pre-op, post-op, PT follow-ups. How are you managing all those touchpoints and reminders?",
        "At your scale, what's your biggest communication challenge? Is it call volume, no-shows, payment collection, or something else?",
        "Are patients asking to text your offices? How do you handle that today across 5 locations?"
      ],
      objectionHandler: "That's a great point — with 5 locations you need to make sure any new platform integrates cleanly and doesn't disrupt operations. Weave is built specifically for healthcare practices, so we integrate with most major practice management systems out of the box. We also do phased rollouts for multi-location groups, so you can start with one location, prove it works, and then expand.",
      suggestedCTA: "I'd love to set up a quick introductory call — no hard pitch, just a conversation about what we're seeing work for multi-location specialty practices. If it makes sense, great. If not, no worries. Does 20 minutes later this week work?"
    }
  },
  {
    id: 'acc-008',
    company: 'Sunrise Family Dental',
    size: '1 location, ~10 staff',
    location: 'Salt Lake City, UT',
    industry: 'Dental',
    revenue: '$1.1M',
    currentTools: 'No dedicated communication platform — basic phone, paper appointment reminders, no online reviews strategy',
    founded: '2021',
    specialties: ['General Dentistry', 'Family Dentistry', 'Emergency Dental Care'],
    website: 'sunrisefamilydental.com',
    aiScore: 80,
    fitScore: 82,
    intentScore: 76,
    timingScore: 78,
    dealValue: '$4,800/yr',
    seats: '1 location',
    whyPrioritized: 'Downloaded ROI calculator, viewed demo page, newer practice with no communication platform — greenfield opportunity. Located in Weave HQ territory (Utah) which historically converts well.',
    contacts: [
      {
        name: 'Dr. Tyler Jensen',
        title: 'Owner / Dentist',
        email: 'tjensen@sunrisefamilydental.com',
        phone: '(801) 555-0177',
        isPrimary: true
      },
      {
        name: 'Ashley Morton',
        title: 'Office Manager',
        email: 'amorton@sunrisefamilydental.com',
        phone: '(801) 555-0183',
        isPrimary: false
      }
    ],
    signals: [
      { type: 'website', detail: 'Downloaded ROI calculator', time: '2 days ago', strength: 'warm' },
      { type: 'website', detail: 'Viewed demo request page (did not submit)', time: '2 days ago', strength: 'warm' },
      { type: 'website', detail: 'Visited "Features" overview page', time: '3 days ago', strength: 'warm' },
      { type: 'email', detail: 'Opened nurture email: "5 Ways to Modernize Your Dental Practice"', time: '4 days ago', strength: 'warm' }
    ],
    callScript: {
      opening: "Hi Dr. Jensen, this is Alex Rivera with Weave — we're actually headquartered right here in Utah, so I love connecting with local practices. I noticed you downloaded our ROI calculator and checked out the demo page. Sounds like you might be exploring ways to level up your practice's communication. What's driving that?",
      discoveryQuestions: [
        "As a newer practice, what does your patient communication setup look like today? Are you mostly relying on phone calls and maybe some manual reminders?",
        "How are you currently handling online reviews? Google reviews are huge for newer practices trying to build visibility — do you have a system for requesting them?",
        "What's your biggest frustration with how patients interact with your office today? Is it missed calls, no-shows, payment collection, or something else?",
        "You downloaded the ROI calculator — were the numbers what you expected? Any questions about how we calculated those?"
      ],
      objectionHandler: "I totally get that as a newer practice, budget is tight and every investment needs to count. That's actually why a lot of younger practices start with Weave — instead of cobbling together 4 different tools as you grow, you start with one platform that scales with you. And at $400/month, most practices tell us they make that back in the first week just from the calls they stop missing and the faster payment collection.",
      suggestedCTA: "Since you're right here in Utah, would you want to swing by our office for a quick in-person demo? We've got a great setup where you can see everything live. If not, a 15-minute virtual demo works just as well. What's your preference?"
    }
  }
];

export const dailyActions = [
  // --- CALLS (7) ---
  {
    id: 'action-001',
    type: 'CALL',
    priority: 'urgent',
    contactName: 'Amanda Briggs',
    contactTitle: 'Practice Manager',
    contactPhone: '(615) 555-0162',
    contactEmail: 'abriggs@lakewooddentistry.com',
    accountId: 'acc-004',
    company: 'Lakewood Family Dentistry',
    companySize: '1 location, ~15 staff',
    companyLocation: 'Nashville, TN',
    action: 'Call Amanda — trial expired yesterday with exceptional usage. Strike while the iron is hot.',
    reason: 'Free trial expired with 340 AI Receptionist calls handled. Pricing page visited same day. Highest conversion probability in pipeline.',
    timeSlot: '9:00 AM',
    duration: '15 min',
    callBrief: [
      'Trial expired yesterday — 340 calls handled by AI Receptionist, 89 text convos, 47 review requests sent during trial',
      'Pricing page visited immediately after trial expiration and again this morning',
      'Decision maker is Practice Manager Amanda Briggs — Dr. Whitfield is the owner',
      'Single location dental in Nashville, currently on basic phone system. Deal value: $6,000/yr'
    ],
    openingLine: "Hi Amanda, it's Alex with Weave. Your trial just wrapped up and I have to say — 340 calls handled by the AI Receptionist is one of the strongest trial performances I've seen. How's the team feeling going back to the old way?",
    discoveryQuestions: [
      "Now that the AI Receptionist is off, how many calls went to voicemail this morning?",
      "What would it take to get Dr. Whitfield comfortable signing off on this?"
    ],
    objectionHandler: "I understand wanting to review the numbers. Based on your trial, the AI Receptionist was catching about 24 calls per day. Even if just 10% of those are new patient inquiries worth $500+ each, that's $1,200/day in potential revenue you're protecting — for about $17/day in Weave cost.",
    suggestedCTA: "Let me get you on a quick 10-minute pricing call today — we can lock in your trial rate before it expires. Does 3 PM CT work?"
  },
  {
    id: 'action-002',
    type: 'CALL',
    priority: 'urgent',
    contactName: 'Rachel Torres',
    contactTitle: 'COO / Practice Administrator',
    contactPhone: '(619) 555-0188',
    contactEmail: 'rtorres@brightsmiledentalgroup.com',
    accountId: 'acc-001',
    company: 'Bright Smile Dental Group',
    companySize: '4 locations, ~60 staff',
    companyLocation: 'San Diego, CA',
    action: 'Call Rachel — pricing page visited 3x and AI Receptionist demo requested. Highest deal value in pipeline.',
    reason: 'AI Receptionist demo request submitted, pricing page visited 3 times in 48 hours. 4-location DSO with $19,200/yr deal value. Demandforce contract renews in 6 weeks.',
    timeSlot: '9:30 AM',
    duration: '15 min',
    callBrief: [
      'Submitted AI Receptionist demo request form 5 hours ago',
      'Visited pricing page 3 times in the last 48 hours — strong buying signal',
      'Currently using Demandforce + separate phone system — contract renews in 6 weeks',
      '4-location DSO in San Diego. COO Rachel Torres is the decision maker. Deal value: $19,200/yr'
    ],
    openingLine: "Hi Rachel, this is Alex with Weave. I saw your team submitted a request to see our AI Receptionist — I wanted to get back to you right away. Before I schedule that demo, can I ask what's driving the interest?",
    discoveryQuestions: [
      "With 4 locations, how are after-hours calls handled today? Are patients getting through or hitting voicemail?",
      "You're using Demandforce now — is the plan to evaluate alternatives before your renewal comes up?"
    ],
    objectionHandler: "I hear you on timing — 6 weeks feels tight. But that's actually perfect. Weave can be live in under 2 weeks, giving you a full month to run both in parallel if you want. And most DSOs tell us the consolidation from 3-4 tools down to 1 actually makes the transition easier, not harder.",
    suggestedCTA: "Let's get that AI Receptionist demo on the calendar with our DSO specialist — how does Thursday at 2 PM PT work for you and Dr. Chen?"
  },
  {
    id: 'action-003',
    type: 'CALL',
    priority: 'high',
    contactName: 'David Park',
    contactTitle: 'COO',
    contactPhone: '(305) 555-0418',
    contactEmail: 'dpark@coastalpeddentistry.com',
    accountId: 'acc-006',
    company: 'Coastal Pediatric Dentistry',
    companySize: '3 locations, ~40 staff',
    companyLocation: 'Miami, FL',
    action: 'Call David — he replied asking about AI Receptionist ROI. Continue the conversation.',
    reason: 'COO replied to outbound email asking specifically about AI Receptionist ROI. Visited ROI calculator page. 3-location pediatric dental — $14,400/yr deal value.',
    timeSlot: '10:00 AM',
    duration: '15 min',
    callBrief: [
      'David replied to outbound email yesterday asking about AI Receptionist ROI',
      'Visited ROI calculator page same day — actively evaluating numbers',
      'Currently on RevenueWell + separate phone + separate texting — 3 tools to consolidate',
      '3-location pediatric dental in Miami. High parent call volume = strong AI Receptionist fit. Deal value: $14,400/yr'
    ],
    openingLine: "Hi David, it's Alex with Weave — thanks again for your reply yesterday. You asked about AI Receptionist ROI, and I've got some specific numbers from pediatric dental groups your size. Do you have 5 minutes?",
    discoveryQuestions: [
      "What's driving the ROI question — are you looking to reduce costs by consolidating tools, or is it more about capturing revenue from missed calls?",
      "Roughly how much are you spending per month across RevenueWell, your phone system, and texting tool?"
    ],
    objectionHandler: "Totally fair to want hard numbers. A 3-location pediatric group in Tampa consolidated to Weave and saved $1,100/month in tool costs while their AI Receptionist caught 45 after-hours calls per week — they estimated about $8K/month in new patient revenue that was going to voicemail.",
    suggestedCTA: "Let me put together a custom ROI analysis using your actual numbers — I just need your current monthly costs and rough call volume. Can we do a quick 20-minute working session this week?"
  },
  {
    id: 'action-004',
    type: 'CALL',
    priority: 'high',
    contactName: 'Jennifer Walsh',
    contactTitle: 'Practice Manager',
    contactPhone: '(206) 555-0347',
    contactEmail: 'jwalsh@peninsulaeye.com',
    accountId: 'acc-002',
    company: 'Peninsula Eye Associates',
    companySize: '2 locations, ~25 staff',
    companyLocation: 'Seattle, WA',
    action: 'Call Jennifer — RingCentral contract expires in 30 days. Time-sensitive displacement opportunity.',
    reason: 'RingCentral contract expires in 30 days. Downloaded optometry communication guide. Using Birdeye + RingCentral — fragmented stack ripe for consolidation.',
    timeSlot: '10:30 AM',
    duration: '15 min',
    callBrief: [
      'RingCentral contract expires in 30 days — critical timing window for displacement',
      'Downloaded "Optometry Practice Communication Guide" 3 days ago',
      'Currently using Birdeye for reviews + RingCentral for phones — no unified platform',
      '2-location optometry practice in Seattle. Deal value: $9,600/yr'
    ],
    openingLine: "Hi Jennifer, this is Alex with Weave. Your team downloaded our Optometry Communication Guide — great timing because I work with several optometry practices in the Pacific Northwest. Quick question: how is your current phone system working for you? Specifically, is your RingCentral contract coming up soon?",
    discoveryQuestions: [
      "Between Birdeye and RingCentral, you're paying for two separate platforms — are you also doing appointment reminders manually on top of that?",
      "With your contract coming up, are you actively looking at alternatives or was this more exploratory?"
    ],
    objectionHandler: "Switching phone providers can feel daunting, but Weave handles number porting seamlessly — most practices are live in under 2 weeks with zero downtime. And since your RingCentral renewal is the perfect window, there's no overlap cost.",
    suggestedCTA: "Since the clock is ticking on your RingCentral renewal, let me get a quick cost comparison in front of you this week. 15 minutes — I'll show you what a unified Weave setup looks like for both locations. How's Wednesday morning?"
  },
  {
    id: 'action-005',
    type: 'CALL',
    priority: 'standard',
    contactName: 'Dr. Priya Patel',
    contactTitle: 'Owner / Optometrist',
    contactPhone: '(503) 555-0291',
    contactEmail: 'ppatel@clearviewoptometry.com',
    accountId: 'acc-005',
    company: 'ClearView Optometry',
    companySize: '1 location, ~8 staff',
    companyLocation: 'Portland, OR',
    action: 'Call Dr. Patel — attended webinar and asked 2 questions about AI answering. Follow up while interest is warm.',
    reason: 'Attended AI in Optometry webinar, asked 2 questions about AI answering. Viewed AI Receptionist page afterward. Using Podium + separate phone — consolidation opportunity.',
    timeSlot: '11:00 AM',
    duration: '15 min',
    callBrief: [
      'Attended "AI in Optometry" webinar — asked 2 questions about AI answering capabilities',
      'Viewed AI Receptionist product page immediately after webinar',
      'Followed Weave on LinkedIn — showing continued interest',
      'Using Podium for messaging + separate analog phone system. Deal value: $4,800/yr'
    ],
    openingLine: "Hi Dr. Patel, this is Alex with Weave. I noticed you attended our AI in Optometry webinar and asked some great questions about AI answering — specifically around appointment scheduling for eye exams. I wanted to follow up on that directly.",
    discoveryQuestions: [
      "Your questions in the webinar were around AI handling scheduling — is that because your front desk is overwhelmed, or is it more about after-hours coverage?",
      "You're on Podium today — is that covering everything you need, or are there gaps around the phone and payment side?"
    ],
    objectionHandler: "I totally get that Podium is working for messaging. The difference with Weave is you get that same messaging plus the phone system and AI Receptionist all in one — so you'd actually replace Podium and your phone bill with a single platform. Most practices end up saving money on the switch.",
    suggestedCTA: "Let me show you a quick 15-minute demo of the AI Receptionist handling optometry-specific calls — appointment booking, insurance questions, contact lens reorders. How's next Tuesday work?"
  },
  {
    id: 'action-006',
    type: 'CALL',
    priority: 'standard',
    contactName: 'Brittany Cole',
    contactTitle: 'Office Manager',
    contactPhone: '(512) 555-0223',
    contactEmail: 'bcole@mountainviewvet.com',
    accountId: 'acc-003',
    company: 'Mountain View Veterinary',
    companySize: '1 location, ~12 staff',
    companyLocation: 'Austin, TX',
    action: "Call Brittany — downloaded buyer's guide and read 3 content pieces. Warm lead, build the relationship.",
    reason: "Downloaded buyer's guide, read AI Receptionist blog, text-to-pay blog, and vet case study. Using PetDesk + landline phones — gap in phone and texting.",
    timeSlot: '11:30 AM',
    duration: '15 min',
    callBrief: [
      "Downloaded Weave Buyer's Guide yesterday",
      'Read 3 blog posts: AI Receptionist for vets, text-to-pay, and a vet case study',
      'Currently on PetDesk (scheduling only) + landline phones — no texting, no AI answering',
      'Single-location vet clinic in Austin. High call volume vertical. Deal value: $4,800/yr'
    ],
    openingLine: "Hi Brittany, this is Alex with Weave. I noticed you downloaded our buyer's guide and have been reading up on our AI Receptionist and text-to-pay — sounds like you're exploring options for Mountain View Vet. What's the biggest communication challenge you're dealing with right now?",
    discoveryQuestions: [
      "Vet clinics tend to get a huge volume of calls — how many would you estimate you handle on a busy day, and how many go to voicemail?",
      "You're on PetDesk for scheduling — are pet owners asking to text your office? How do you handle that today?"
    ],
    objectionHandler: "I hear you on budget — as a single location, every dollar counts. The good news is most vet practices your size see ROI within 60 days. Between the calls you stop missing, the no-shows that drop with automated reminders, and faster payment collection with text-to-pay, practices typically recover the cost of Weave in the first month.",
    suggestedCTA: "Let me show you a quick 15-minute demo focused specifically on what we do for vet practices — phones, texting, and the AI Receptionist. Does Thursday afternoon work?"
  },
  {
    id: 'action-007',
    type: 'CALL',
    priority: 'standard',
    contactName: 'Dr. Tyler Jensen',
    contactTitle: 'Owner / Dentist',
    contactPhone: '(801) 555-0177',
    contactEmail: 'tjensen@sunrisefamilydental.com',
    accountId: 'acc-008',
    company: 'Sunrise Family Dental',
    companySize: '1 location, ~10 staff',
    companyLocation: 'Salt Lake City, UT',
    action: 'Call Dr. Jensen — downloaded ROI calculator, viewed demo page. Local Utah practice — leverage Weave HQ proximity.',
    reason: 'Downloaded ROI calculator, viewed demo page (but did not submit), opened nurture email. Newer practice with no communication platform — greenfield. Local to Weave HQ.',
    timeSlot: '1:00 PM',
    duration: '15 min',
    callBrief: [
      'Downloaded ROI calculator 2 days ago — evaluated the financial case',
      'Viewed demo request page but did not submit — may need a nudge',
      'Newer practice (2021) with no dedicated communication platform — greenfield opportunity',
      'Single location dental in Salt Lake City — local to Weave HQ. Deal value: $4,800/yr'
    ],
    openingLine: "Hi Dr. Jensen, this is Alex with Weave — we're actually headquartered right here in Utah, so I always love connecting with local practices. I saw you ran our ROI calculator — what did you think of the numbers? Anything surprise you?",
    discoveryQuestions: [
      "As a newer practice, what does your patient communication setup look like today? Are you mostly phone and manual reminders?",
      "What's your biggest frustration with how patients interact with your office?"
    ],
    objectionHandler: "Totally understand being cautious with a newer practice. That's actually why a lot of young practices start with Weave early — instead of cobbling together 4 different tools as you grow, you start with one platform that scales with you. At $400/month, most practices make that back in the first week from calls they stop missing.",
    suggestedCTA: "Since you're local, would you want to swing by our office for a quick in-person demo? You can see everything live. If not, a 15-minute virtual works just as well. What's your preference?"
  },

  // --- EMAILS (4) ---
  {
    id: 'action-008',
    type: 'EMAIL',
    priority: 'high',
    contactName: 'Patricia Hoffman',
    contactTitle: 'Director of Operations',
    contactPhone: '(303) 555-0528',
    contactEmail: 'phoffman@valleyorthopedic.com',
    accountId: 'acc-007',
    company: 'Valley Orthopedic Associates',
    companySize: '5 locations, ~80 staff',
    companyLocation: 'Denver, CO',
    action: 'Send initial outreach email — ICP match, downloaded whitepaper, posting for Patient Experience Coordinator.',
    reason: 'Strong ICP match at 5 locations with $24K deal value. Downloaded whitepaper and posting for Patient Experience Coordinator — communication is clearly top of mind.',
    timeSlot: '9:15 AM',
    duration: '5 min',
    emailSubject: 'Patient communication across 5 orthopedic locations',
    emailBody: `Hi Patricia,

I came across Valley Orthopedic Associates and noticed you're hiring a Patient Experience Coordinator — sounds like improving patient communication is a priority right now.

I work with multi-location specialty practices, and one thing I hear consistently is that managing patient communication across multiple offices (calls, texts, reminders, payments) becomes a real challenge without a unified platform — especially with the complexity of orthopedic patient journeys (pre-op, post-op, PT follow-ups, etc.).

Weave is a healthcare-specific communication platform that brings your phones, texting, appointment reminders, payments, reviews, and AI-powered answering into one HIPAA-compliant system — purpose-built for practices like yours.

A few things that typically resonate with multi-location specialty groups:
- AI Receptionist handles routine calls (scheduling, insurance questions) so your front desk can focus on in-office patients
- 2-way texting that 89% of patients prefer over phone calls
- Automated reminders that reduce no-shows by 20% on average
- Text-to-pay that increases collections by 30%

Would it be worth a 20-minute conversation to see if there's a fit? No pressure — just a look at what we're seeing work for practices your size.

Best,
Alex Rivera
Account Executive, Weave
(801) 555-0099`
  },
  {
    id: 'action-009',
    type: 'EMAIL',
    priority: 'high',
    contactName: 'Jennifer Walsh',
    contactTitle: 'Practice Manager',
    contactPhone: '(206) 555-0347',
    contactEmail: 'jwalsh@peninsulaeye.com',
    accountId: 'acc-002',
    company: 'Peninsula Eye Associates',
    companySize: '2 locations, ~25 staff',
    companyLocation: 'Seattle, WA',
    action: 'Send pre-call email with cost comparison teaser — RingCentral contract expiring.',
    reason: 'Sending ahead of call to warm up the conversation and put the competitive displacement angle on paper before the phone conversation.',
    timeSlot: '10:15 AM',
    duration: '5 min',
    emailSubject: 'Before your RingCentral renewal — quick comparison',
    emailBody: `Hi Jennifer,

I know your RingCentral contract is coming up for renewal, so I wanted to share something before we chat.

Most optometry practices using RingCentral + Birdeye are spending $500-800/month across both platforms — and still missing key capabilities like automated appointment reminders, text-to-pay, and AI call answering.

With Weave, Peninsula Eye Associates would get:
- Phone system (replacing RingCentral) with built-in call intelligence
- Reviews management (replacing Birdeye) with automated review requests
- 2-way patient texting and automated appointment reminders
- Text-to-pay for faster collections
- AI Receptionist to handle after-hours and overflow calls

All in one HIPAA-compliant platform — typically at a lower cost than what you're paying for RingCentral + Birdeye separately.

I'd love to walk through a quick cost comparison for your 2 locations. I'll give you a call shortly, but in the meantime — would a side-by-side comparison be helpful?

Best,
Alex Rivera
Account Executive, Weave
(801) 555-0099`
  },
  {
    id: 'action-010',
    type: 'EMAIL',
    priority: 'standard',
    contactName: 'Brittany Cole',
    contactTitle: 'Office Manager',
    contactPhone: '(512) 555-0223',
    contactEmail: 'bcole@mountainviewvet.com',
    accountId: 'acc-003',
    company: 'Mountain View Veterinary',
    companySize: '1 location, ~12 staff',
    companyLocation: 'Austin, TX',
    action: 'Send personalized follow-up email with vet-specific case study after call.',
    reason: 'Post-call nurture — send the veterinary case study she was reading, along with a personalized note tying it to her specific pain points.',
    timeSlot: '12:00 PM',
    duration: '5 min',
    emailSubject: 'The vet case study you were reading + a few thoughts',
    emailBody: `Hi Brittany,

Great chatting earlier — thanks for sharing what's going on at Mountain View Vet.

You mentioned that call volume is a big challenge, especially during the morning rush when the phones are ringing off the hook while you're checking in patients. I hear that from a lot of vet practices.

I wanted to send over a couple of things:

1. The case study you were reading about a vet practice in Austin (small world!) that reduced missed calls by 78% after switching to Weave: [link]

2. A quick breakdown of how our AI Receptionist specifically handles common vet calls — appointment scheduling, medication refill requests, after-hours emergencies routing — without your team lifting a finger: [link]

The bottom line for most vet practices: Weave replaces your landline + adds texting, reminders, reviews, and AI answering for less than what many practices spend on their phone system alone.

Let me know if Thursday at 2 PM works for that demo — I'll keep it focused on the vet-specific features.

Best,
Alex Rivera
Account Executive, Weave
(801) 555-0099`
  },
  {
    id: 'action-011',
    type: 'EMAIL',
    priority: 'standard',
    contactName: 'Dr. Tyler Jensen',
    contactTitle: 'Owner / Dentist',
    contactPhone: '(801) 555-0177',
    contactEmail: 'tjensen@sunrisefamilydental.com',
    accountId: 'acc-008',
    company: 'Sunrise Family Dental',
    companySize: '1 location, ~10 staff',
    companyLocation: 'Salt Lake City, UT',
    action: 'Send post-call email with ROI breakdown and in-person demo invite.',
    reason: 'Post-call nurture. Dr. Jensen is local to Weave HQ — push for in-person demo. Include personalized ROI based on call conversation.',
    timeSlot: '1:30 PM',
    duration: '5 min',
    emailSubject: 'Your ROI numbers + local demo invite',
    emailBody: `Hi Dr. Jensen,

Great talking with you today. Based on what you shared about Sunrise Family Dental — 10 staff, about 40 calls/day, and currently no dedicated communication platform — here's a quick back-of-napkin ROI:

Missed calls recovered (est. 8/day x $300 avg new patient value): ~$2,400/month
No-show reduction (20% improvement on ~15 no-shows/month): ~$3,000/month saved
Faster payment collection via text-to-pay (30% improvement): ~$1,500/month
Review generation (automated requests → more Google reviews): Priceless for a newer practice

Total estimated monthly impact: $6,900+
Weave monthly cost for your practice: ~$400/month

Since you're right here in Salt Lake City, I'd love to have you stop by the Weave office for a demo. We have a full setup where you can see the phone system, texting, AI Receptionist, and text-to-pay all working live. Coffee's on us.

How does Wednesday or Thursday this week look?

Best,
Alex Rivera
Account Executive, Weave
(801) 555-0099`
  },

  // --- LINKEDIN (2) ---
  {
    id: 'action-012',
    type: 'LINKEDIN',
    priority: 'standard',
    contactName: 'Patricia Hoffman',
    contactTitle: 'Director of Operations',
    contactPhone: '(303) 555-0528',
    contactEmail: 'phoffman@valleyorthopedic.com',
    accountId: 'acc-007',
    company: 'Valley Orthopedic Associates',
    companySize: '5 locations, ~80 staff',
    companyLocation: 'Denver, CO',
    action: 'Send LinkedIn connection request — warm up the relationship before email lands.',
    reason: 'Multi-touch approach for a large deal ($24K/yr). Patricia connected with a Weave employee already — she is active on LinkedIn. Get the connection in place before the email.',
    timeSlot: '9:00 AM',
    duration: '3 min',
    linkedinMessage: `Hi Patricia — I saw you recently connected with a colleague of mine at Weave, and I noticed Valley Orthopedic Associates is growing across the Denver area. I work with multi-location specialty practices on patient communication strategy and would love to connect. No pitch — just always great to know folks doing impressive work in healthcare operations. — Alex`
  },
  {
    id: 'action-013',
    type: 'LINKEDIN',
    priority: 'standard',
    contactName: 'Dr. Priya Patel',
    contactTitle: 'Owner / Optometrist',
    contactPhone: '(503) 555-0291',
    contactEmail: 'ppatel@clearviewoptometry.com',
    accountId: 'acc-005',
    company: 'ClearView Optometry',
    companySize: '1 location, ~8 staff',
    companyLocation: 'Portland, OR',
    action: 'Engage with Dr. Patel on LinkedIn — she followed Weave. Like/comment on her recent post, then send a message.',
    reason: 'Dr. Patel followed Weave on LinkedIn and attended the webinar. A LinkedIn touchpoint before the call adds warmth to the outreach.',
    timeSlot: '10:45 AM',
    duration: '3 min',
    linkedinMessage: `Hi Dr. Patel — I saw you attended our AI in Optometry webinar and asked some really thoughtful questions about AI-powered scheduling. That's one of the features our optometry clients love most. I'd love to connect and share a few resources on how practices like ClearView are using AI answering to free up their front desk. Would that be helpful? — Alex`
  },

  // --- FOLLOW-UPS (2) ---
  {
    id: 'action-014',
    type: 'FOLLOW-UP',
    priority: 'high',
    contactName: 'David Park',
    contactTitle: 'COO',
    contactPhone: '(305) 555-0418',
    contactEmail: 'dpark@coastalpeddentistry.com',
    accountId: 'acc-006',
    company: 'Coastal Pediatric Dentistry',
    companySize: '3 locations, ~40 staff',
    companyLocation: 'Miami, FL',
    action: 'Send follow-up with custom ROI analysis after call with David.',
    reason: 'David asked about ROI in his email reply. After the call, send the custom ROI analysis based on actual numbers shared during the conversation.',
    timeSlot: '2:00 PM',
    duration: '10 min',
    emailSubject: 'Custom ROI analysis for Coastal Pediatric Dentistry',
    emailBody: `Hi David,

Thanks for the great conversation earlier. As promised, here's your custom ROI analysis based on the numbers you shared.

Current monthly spend:
- RevenueWell: $450/month
- Phone system (3 locations): $600/month
- Texting service: $200/month
- Total: $1,250/month

Weave (3 locations, all-in-one): ~$1,200/month
Immediate savings: $50/month ($600/year)

But here's where the real ROI lives:

Missed call recovery (AI Receptionist):
- Your team estimated ~30 after-hours calls/week going to voicemail
- If AI Receptionist converts even 20% to booked appointments
- At $250 avg pediatric visit value = $6,000/month in recovered revenue

No-show reduction (automated reminders):
- 20% improvement on your current no-show rate
- Estimated savings: $4,200/month

Text-to-pay acceleration:
- 30% faster collections on outstanding balances
- Estimated impact: $2,800/month

Total estimated monthly impact: $13,050+
Net monthly cost after tool consolidation savings: $1,200

I'd love to walk through these numbers together and answer any questions for Dr. Santos. Does Thursday work for a follow-up with your team?

Best,
Alex Rivera
Account Executive, Weave
(801) 555-0099`
  },
  {
    id: 'action-015',
    type: 'FOLLOW-UP',
    priority: 'standard',
    contactName: 'Rachel Torres',
    contactTitle: 'COO / Practice Administrator',
    contactPhone: '(619) 555-0188',
    contactEmail: 'rtorres@brightsmiledentalgroup.com',
    accountId: 'acc-001',
    company: 'Bright Smile Dental Group',
    companySize: '4 locations, ~60 staff',
    companyLocation: 'San Diego, CA',
    action: 'Follow up after call — send calendar invite for AI Receptionist demo with DSO specialist.',
    reason: 'After the initial call, send calendar invite + prep materials for the DSO-specific AI Receptionist demo.',
    timeSlot: '2:30 PM',
    duration: '5 min',
    emailSubject: 'Demo confirmed — Bright Smile Dental Group x Weave',
    emailBody: `Hi Rachel,

Thanks for the great conversation today. I'm excited to get this demo set up for you and Dr. Chen.

Here's what to expect:

Date/Time: Thursday at 2:00 PM PT
Duration: 20 minutes
Who: You, Dr. Chen, and our DSO specialist Sarah Mitchell
What we'll cover:
- Live AI Receptionist demo (handling scheduling, insurance, and routing calls across locations)
- How a 4-location DSO in Phoenix consolidated from Demandforce + phone + texting to Weave
- Multi-location admin dashboard walkthrough
- Pricing for 4 locations

Calendar invite is on its way. In the meantime, here's a quick case study from a similar DSO that I think you'll find useful: [link]

See you Thursday!

Best,
Alex Rivera
Account Executive, Weave
(801) 555-0099`
  },

  // --- RESEARCH (1) ---
  {
    id: 'action-016',
    type: 'RESEARCH',
    priority: 'standard',
    contactName: 'Patricia Hoffman',
    contactTitle: 'Director of Operations',
    contactPhone: '(303) 555-0528',
    contactEmail: 'phoffman@valleyorthopedic.com',
    accountId: 'acc-007',
    company: 'Valley Orthopedic Associates',
    companySize: '5 locations, ~80 staff',
    companyLocation: 'Denver, CO',
    action: 'Research Valley Orthopedic before outreach — largest potential deal at $24K/yr.',
    reason: 'Highest deal value account at $24K/yr. Need deeper intel on their tech stack, competitive landscape, growth plans, and decision-making structure before engaging.',
    timeSlot: '8:30 AM',
    duration: '15 min',
    researchTasks: [
      'Check Valley Orthopedic website for current patient portal, online scheduling, and review presence — identify communication gaps',
      'Search for Dr. Robert Keane and Patricia Hoffman on LinkedIn — recent posts, shared connections, conference appearances',
      'Research their practice management system (likely Athena, eClinicalWorks, or ModMed) — confirm Weave integration compatibility',
      'Look at their Google reviews — how many, average rating, response rate. Identify review management opportunity',
      'Search for any recent news, expansion announcements, or new provider hires that indicate growth and timing for investment'
    ]
  },

  // --- CREATE DEAL (2) ---
  {
    id: 'action-017',
    type: 'CREATE DEAL',
    priority: 'urgent',
    contactName: 'Amanda Briggs',
    contactTitle: 'Practice Manager',
    contactPhone: '(615) 555-0162',
    contactEmail: 'abriggs@lakewooddentistry.com',
    accountId: 'acc-004',
    company: 'Lakewood Family Dentistry',
    companySize: '1 location, ~15 staff',
    companyLocation: 'Nashville, TN',
    action: 'Create deal in CRM — trial expired with exceptional usage, high conversion probability.',
    reason: 'Free trial with 340 AI Receptionist calls handled, pricing page visited multiple times, strong buying signals. This deal is ready to be tracked in pipeline.',
    timeSlot: '8:45 AM',
    duration: '3 min',
    dealDetails: {
      dealName: 'Lakewood Family Dentistry — Weave Platform',
      amount: '$6,000/yr',
      locations: '1 location',
      stage: 'Trial Conversion',
      closeDate: '2026-04-14',
      primaryContact: 'Amanda Briggs, Practice Manager',
      notes: 'Free trial expired 3/30 with exceptional usage: 340 AI Receptionist calls, 89 text conversations, 47 review requests. Pricing page visited same day and again next morning. Decision maker is Amanda Briggs (Practice Manager), final sign-off likely from Dr. Whitfield (Owner). Push for close within 2 weeks while trial momentum is fresh.'
    }
  },
  {
    id: 'action-018',
    type: 'CREATE DEAL',
    priority: 'high',
    contactName: 'Rachel Torres',
    contactTitle: 'COO / Practice Administrator',
    contactPhone: '(619) 555-0188',
    contactEmail: 'rtorres@brightsmiledentalgroup.com',
    accountId: 'acc-001',
    company: 'Bright Smile Dental Group',
    companySize: '4 locations, ~60 staff',
    companyLocation: 'San Diego, CA',
    action: 'Create deal in CRM — demo requested, pricing page hot, largest deal in pipeline.',
    reason: 'AI Receptionist demo requested, pricing page visited 3x in 48 hours, Demandforce contract renews in 6 weeks. Strong buying signals justify creating a tracked deal.',
    timeSlot: '9:00 AM',
    duration: '3 min',
    dealDetails: {
      dealName: 'Bright Smile Dental Group — Weave Platform (4 locations)',
      amount: '$19,200/yr',
      locations: '4 locations',
      stage: 'Demo Scheduled',
      closeDate: '2026-05-08',
      primaryContact: 'Rachel Torres, COO',
      notes: 'AI Receptionist demo request submitted. Pricing page visited 3x in 48 hours. Currently on Demandforce + separate phone — contract renews in ~6 weeks. 4-location DSO in San Diego. Rachel Torres (COO) is primary decision maker, Dr. Marcus Chen (CEO) has final sign-off. DSO specialist Sarah Mitchell to lead demo. Target close before Demandforce renewal.'
    }
  }
];

export const signalFeed = [
  {
    id: 'sig-001',
    accountId: 'acc-004',
    account: 'Lakewood Family Dentistry',
    action: 'Visited pricing page — Plans & Pricing (2nd visit today)',
    time: '3 hours ago',
    type: 'website',
    strength: 'hot'
  },
  {
    id: 'sig-002',
    accountId: 'acc-001',
    account: 'Bright Smile Dental Group',
    action: 'Visited pricing page for the 3rd time in 48 hours',
    time: '2 hours ago',
    type: 'website',
    strength: 'hot'
  },
  {
    id: 'sig-003',
    accountId: 'acc-001',
    account: 'Bright Smile Dental Group',
    action: 'Submitted AI Receptionist demo request form',
    time: '5 hours ago',
    type: 'website',
    strength: 'hot'
  },
  {
    id: 'sig-004',
    accountId: 'acc-004',
    account: 'Lakewood Family Dentistry',
    action: 'Free trial expired — 340 AI Receptionist calls handled during trial period',
    time: '1 day ago',
    type: 'website',
    strength: 'hot'
  },
  {
    id: 'sig-005',
    accountId: 'acc-006',
    account: 'Coastal Pediatric Dentistry',
    action: 'COO David Park replied to outbound email asking about AI Receptionist ROI',
    time: '1 day ago',
    type: 'email',
    strength: 'hot'
  },
  {
    id: 'sig-006',
    accountId: 'acc-004',
    account: 'Lakewood Family Dentistry',
    action: 'Opened trial recap email showing usage statistics',
    time: '12 hours ago',
    type: 'email',
    strength: 'hot'
  },
  {
    id: 'sig-007',
    accountId: 'acc-006',
    account: 'Coastal Pediatric Dentistry',
    action: 'David Park visited ROI calculator page',
    time: '1 day ago',
    type: 'website',
    strength: 'hot'
  },
  {
    id: 'sig-008',
    accountId: 'acc-001',
    account: 'Bright Smile Dental Group',
    action: 'Viewed AI Receptionist product page — 4 min read time',
    time: '1 day ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-009',
    accountId: 'acc-002',
    account: 'Peninsula Eye Associates',
    action: 'RingCentral contract renewal approaching — 30 days remaining',
    time: '1 week ago',
    type: 'job',
    strength: 'hot'
  },
  {
    id: 'sig-010',
    accountId: 'acc-001',
    account: 'Bright Smile Dental Group',
    action: 'Opened "Reduce Missed Calls by 80%" email — 2nd open',
    time: '2 days ago',
    type: 'email',
    strength: 'warm'
  },
  {
    id: 'sig-011',
    accountId: 'acc-002',
    account: 'Peninsula Eye Associates',
    action: 'Downloaded "Optometry Practice Communication Guide"',
    time: '3 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-012',
    accountId: 'acc-002',
    account: 'Peninsula Eye Associates',
    action: 'Jennifer Walsh viewed Weave company page on LinkedIn',
    time: '2 days ago',
    type: 'linkedin',
    strength: 'warm'
  },
  {
    id: 'sig-013',
    accountId: 'acc-003',
    account: 'Mountain View Veterinary',
    action: "Downloaded Weave Buyer's Guide",
    time: '1 day ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-014',
    accountId: 'acc-003',
    account: 'Mountain View Veterinary',
    action: 'Read blog: "How AI Receptionist Helps Vet Practices Never Miss a Call"',
    time: '2 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-015',
    accountId: 'acc-003',
    account: 'Mountain View Veterinary',
    action: 'Read blog: "Text-to-Pay: Faster Collections for Veterinary Clinics"',
    time: '3 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-016',
    accountId: 'acc-005',
    account: 'ClearView Optometry',
    action: 'Attended "AI in Optometry" webinar — asked 2 questions about AI answering',
    time: '4 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-017',
    accountId: 'acc-005',
    account: 'ClearView Optometry',
    action: 'Viewed AI Receptionist product page after webinar',
    time: '4 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-018',
    accountId: 'acc-005',
    account: 'ClearView Optometry',
    action: 'Dr. Patel followed Weave on LinkedIn',
    time: '3 days ago',
    type: 'linkedin',
    strength: 'warm'
  },
  {
    id: 'sig-019',
    accountId: 'acc-006',
    account: 'Coastal Pediatric Dentistry',
    action: 'Viewed multi-location dental case study',
    time: '2 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-020',
    accountId: 'acc-006',
    account: 'Coastal Pediatric Dentistry',
    action: 'David Park viewed Alex Rivera LinkedIn profile',
    time: '2 days ago',
    type: 'linkedin',
    strength: 'warm'
  },
  {
    id: 'sig-021',
    accountId: 'acc-007',
    account: 'Valley Orthopedic Associates',
    action: 'Downloaded whitepaper: "Patient Communication for Specialty Practices"',
    time: '5 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-022',
    accountId: 'acc-007',
    account: 'Valley Orthopedic Associates',
    action: 'Posted job opening: "Patient Experience Coordinator"',
    time: '1 week ago',
    type: 'job',
    strength: 'warm'
  },
  {
    id: 'sig-023',
    accountId: 'acc-007',
    account: 'Valley Orthopedic Associates',
    action: 'Patricia Hoffman connected with Weave employee on LinkedIn',
    time: '6 days ago',
    type: 'linkedin',
    strength: 'warm'
  },
  {
    id: 'sig-024',
    accountId: 'acc-008',
    account: 'Sunrise Family Dental',
    action: 'Downloaded ROI calculator',
    time: '2 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-025',
    accountId: 'acc-008',
    account: 'Sunrise Family Dental',
    action: 'Viewed demo request page (did not submit)',
    time: '2 days ago',
    type: 'website',
    strength: 'warm'
  },
  {
    id: 'sig-026',
    accountId: 'acc-008',
    account: 'Sunrise Family Dental',
    action: 'Opened nurture email: "5 Ways to Modernize Your Dental Practice"',
    time: '4 days ago',
    type: 'email',
    strength: 'warm'
  }
];

export const performanceData = {
  actionsToday: 0,
  actionsTotal: 18,
  callsToday: 0,
  callsTotal: 7,
  emailsToday: 0,
  emailsTotal: 4,
  linkedinToday: 0,
  linkedinTotal: 2,
  followUpsToday: 0,
  followUpsTotal: 2,
  pipelineInfluenced: 0,
  pipelineTarget: 87600,
  weeklyCompletion: [
    { day: 'Mon', completed: 16, total: 18, percentage: 89 },
    { day: 'Tue', completed: 0, total: 18, percentage: 0 },
    { day: 'Wed', completed: 0, total: 0, percentage: 0 },
    { day: 'Thu', completed: 0, total: 0, percentage: 0 },
    { day: 'Fri', completed: 0, total: 0, percentage: 0 }
  ],
  conversionRates: {
    callToMeeting: 34,
    emailToReply: 28,
    linkedinToConnect: 45,
    meetingToOpportunity: 52,
    trialToClose: 68
  },
  topPerformingSignals: [
    { signal: 'Free trial expired (high usage)', conversions: 68, strength: 'hot' },
    { signal: 'AI Receptionist demo request', conversions: 55, strength: 'hot' },
    { signal: 'Pricing page visited 3+ times', conversions: 52, strength: 'hot' },
    { signal: 'Email reply asking about ROI', conversions: 48, strength: 'hot' },
    { signal: 'Competitor contract expiring', conversions: 44, strength: 'hot' },
    { signal: 'ROI calculator downloaded', conversions: 32, strength: 'warm' },
    { signal: 'Webinar attended + questions asked', conversions: 29, strength: 'warm' },
    { signal: 'Buyer guide downloaded + blog reads', conversions: 24, strength: 'warm' }
  ]
};
