export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
};

/**
 * Bios and photos sourced from the SAIF team. SAIFbio is operated by the
 * SAIF Ventures partners; Geoffrey Ralston serves as President of SAIFbio Inc.
 */
export const team: TeamMember[] = [
  {
    slug: "geoff-ralston",
    name: "Geoffrey Ralston",
    role: "Founder & President",
    bio: "Geoff was a partner at Y Combinator beginning in 2011 and served as president of the accelerator from early 2019 until the end of 2022. He has worked with hundreds of YC companies — including Stripe, Ginkgo, Clever, Helion, and Boom — and has been an angel investor in over 100 companies. Earlier in his career, Geoff was part of the team that built Yahoo! Mail and was Yahoo!'s Chief Product Officer until 2006. He was also CEO of Lala Media, which was acquired by Apple in 2009.",
    photo:
      "https://cdn.prod.website-files.com/67e597860dad15f1edfb0109/6915351d670d59ffdebc576b_SAIF%20Team%20(5).png",
  },
  {
    slug: "nick-ralston",
    name: "Nick Ralston",
    role: "Partner",
    bio: "Nick leads research on existential and biological risks from advanced AI systems, keeping the team grounded in the latest safety developments while managing operations and program tools. He oversees SAIFbio's internal systems and day-to-day workflows, helping the team stay organized, collaborative, and focused on making informed decisions. Before SAIF, he led product at Academy College Prep, a nonprofit providing free online college advising to students nationwide.",
    photo:
      "https://cdn.prod.website-files.com/67e597860dad15f1edfb0109/690a367eb17cd6a1c9104798_SAIF%20Team%20(2).png",
  },
  {
    slug: "michael-ralston",
    name: "Michael Ralston",
    role: "Partner",
    bio: "Michael focuses on tracking emerging technologies and the organizations working to mitigate the societal risks of artificial intelligence. He monitors how AI systems intersect with governance, security, and public trust, helping the team anticipate where new risks and opportunities are likely to emerge. Michael leads convenings and partner communications and supports the discovery of new work across the biosecurity ecosystem.",
    photo:
      "https://cdn.prod.website-files.com/67e597860dad15f1edfb0109/690a36a99206faafc85fca80_SAIF%20Team%20(3).png",
  },
];
