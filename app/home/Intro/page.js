import { Button } from '@heroui/button';
import {Card, CardHeader,CardBody} from "@heroui/card";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Page() {

    const plans = [
        {
            title: "Basic",
            description: "Essential features for getting started with our exchange.",
            features: ["Core Trading Features", "Limited Wallet Storage", "Basic Support"],
            button: "Get started - 100% Free",
        },
        {
            title: "Pro",
            description: "Advanced features for frequent traders.",
            features: ["All Basic features", "Increased Wallet Storage", "Advanced Analytics", "Reporting Tools", "API Access", "Priority E-Mail Support"],
            button: "Upgrade to Pro",
        },
        {
            title: "Premium",
            description: "Premium features and priority support for high-volume traders.",
            features: ["All Pro features", "Unlimited Wallet Storage", "End-to-End Encryption", "Market Insights", "Exclusive Early Access", "Dedicated Account Manager", "24/7 Priority Support"],
            button: "Upgrade to Premium",
        }
    ];

    return (
        <div className={`flex flex-col items-center space-y-8 p-8  Dark:text-white  'bg-gradient-to-b dark:from-gray-900 to bg-gray-900 : 'bg-gradient-to-b from-teal-50 to-white'}`}>
             
            {plans.map((plan, index) => (
                <PlanCard key={index} plan={plan} index={index}  />
            ))}
        </div>
    );
}

function PlanCard({ plan, index }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const cardVariant = {
        hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            ref={ref}
            className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} space-x-4`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariant}
            transition={{ duration: 0.5 }}
        >
            <Card className={`w-96 p-6 shadow-xl rounded-2xl dark:bg-gray-800 bg-white`}>
                <CardHeader className={`text-3xl font-bold pb-4 dark:text-teal-400 text-teal-600`}>{plan.title}</CardHeader>
                <CardBody>
                    <ul className="space-y-2 pb-6">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                                ✔️ <span className={`dark:text-white  text-black`}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Button className="w-full bg-teal-600 text-white font-bold p-3 rounded-lg hover:bg-teal-700 transition-transform active:scale-95">{plan.button}</Button>
                </CardBody>
            </Card>
            <p className={`w-96 p-4 text-lg dark:text-gray-300  text-gray-700`}>{plan.description}</p>
        </motion.div>
    );
}

export default Page;
