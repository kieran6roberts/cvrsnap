import { motion } from 'motion/react';

import classes from '~/features/landing/styles/target-customers.module.css';
import { TARGET_CUSTOMERS } from '~/features/landing/consts';

const TargetCustomerItem = ({ title, copy, icon }: { title: string; copy: string; icon: React.ReactNode }) => {
  return (
    <li className={classes['targetItem']}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={classes['targetItem__content']}
      >
        <div className={classes['targetItem__icon']}>{icon}</div>
        <h3 className={classes['targetItem__title']}>{title}</h3>
        <p className={classes['targetItem__copy']}>{copy}</p>
      </motion.div>
    </li>
  );
};

export function TargetCustomerList() {
  return (
    <ul className={classes['targetList']}>
      {TARGET_CUSTOMERS.map((customer, index) => (
        <TargetCustomerItem key={index} {...customer} />
      ))}
    </ul>
  );
}
