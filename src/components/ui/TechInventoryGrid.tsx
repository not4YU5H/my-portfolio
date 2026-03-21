"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data/skills";

export function TechInventoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          className="bg-surface-container-high p-6 space-y-4"
        >
          <h4 className="font-headline text-[10px] tracking-[0.3em] text-primary/60 pb-3 border-b border-outline-variant/15">
            {category.title}
          </h4>
          <ul className="space-y-3">
            {category.items.map((item, itemIndex) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: catIndex * 0.1 + itemIndex * 0.05 + 0.2,
                }}
                className="font-headline text-xs tracking-widest text-secondary/80 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-primary-container/60 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
