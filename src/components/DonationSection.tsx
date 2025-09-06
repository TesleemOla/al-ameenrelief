import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { text } from "stream/consumers";

const DonationSection = () => {

  const [copied, setCopied] = useState(false);

  async function copytoClipboard(){
    const numb = '1007985439'
      try {
        await navigator.clipboard.writeText(numb);
        toast.info("Account number copied!");
        setCopied(true);
      } catch (err) {
        toast.error("Failed to copy text: ", err.message)
      }
  }
  return (
    <section id="donation" className="py-20 bg-gradient-to-br from-charity-blue to-charity-blue/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl text-charity-light max-w-2xl mx-auto">
            Your support helps us continue our mission of providing hope and assistance 
            to those who need it most. Every contribution matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center font-bold text-charity-gold">
                  #10000                </div>
                <div>
                  <h4 className="font-semibold mb-2">Feed a Family</h4>
                  <p className="text-charity-light">Provides nutritious meals for a family of 4 for one week</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center font-bold text-charity-gold">
                  #20000
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Education Support</h4>
                  <p className="text-charity-light">Covers school supplies and fees for one child for a month</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center font-bold text-charity-gold">
                  #50000
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Emergency Relief</h4>
                  <p className="text-charity-light">Provides emergency shelter and basic necessities</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-charity-blue text-center">
                Donation Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h1 className="font-bold text-lg">Lotus Bank</h1>
              <p className="font-bold">Al Ameen Relief Foundation</p>
              <p className="font-bold text-xl">1007985439</p>
              <button className="p-2 bg-charity-gold text-white rounded-md my-3"
              onClick={copytoClipboard}>
                {copied ? "Copied!" : "Copy Account Number"}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;