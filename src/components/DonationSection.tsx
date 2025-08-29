import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const DonationSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    donationType: "",
    amount: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast.success("Thank you for your generous donation intent! We will contact you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      donationType: "",
      amount: "",
      message: ""
    });
  };

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
                <div className="w-12 h-12 bg-charity-gold rounded-full flex items-center justify-center font-bold text-charity-blue">
                  $25
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Feed a Family</h4>
                  <p className="text-charity-light">Provides nutritious meals for a family of 4 for one week</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charity-gold rounded-full flex items-center justify-center font-bold text-charity-blue">
                  $50
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Education Support</h4>
                  <p className="text-charity-light">Covers school supplies and fees for one child for a month</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charity-gold rounded-full flex items-center justify-center font-bold text-charity-blue">
                  $100
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Donation Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("donationType", value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select donation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time Donation</SelectItem>
                        <SelectItem value="monthly">Monthly Sponsorship</SelectItem>
                        <SelectItem value="quarterly">Quarterly Support</SelectItem>
                        <SelectItem value="yearly">Annual Contribution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="amount">Amount ($) *</Label>
                    <Input
                      id="amount"
                      type="number"
                      min="1"
                      value={formData.amount}
                      onChange={(e) => handleInputChange("amount", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-1"
                    rows={3}
                    placeholder="Any specific wishes or instructions for your donation..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-charity-gold hover:bg-charity-gold/90 text-white font-semibold py-6 text-lg"
                >
                  Submit Donation Information
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;